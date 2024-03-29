import * as d3 from 'd3';
import useD3 from '../../hooks/useD3';

function BarChart({ data }) {
    const ref = useD3(
        (svg) => {
            const height = 500;
            const width = 1500;
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };

            console.log(data);

            const x = d3
                .scaleBand()
                .domain(data.map((d) => d.name))
                .rangeRound([margin.left, width - margin.right])
                .padding(0.5);

            const y1 = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => d.height)])
                .rangeRound([height - margin.bottom, margin.top]);

            const xAxis = (g) =>
                g.attr('transform', `translate(0,${height - margin.bottom})`).call(
                    d3
                        .axisBottom(x)
                        .tickValues(
                            data.map(function (d) {
                                return d.name;
                            }),
                        )
                        .tickSizeOuter(0),
                );

            const y1Axis = (g) =>
                g
                    .attr('transform', `translate(${margin.left}, 0)`)
                    .style('color', '#4563C9')
                    .call(d3.axisLeft(y1).ticks(null, 's'))
                    .call((g) => g.select('.domain').remove())
                    .call((g) =>
                        g
                            .append('text')
                            .attr('x', -margin.left)
                            .attr('y', 10)
                            .attr('fill', 'currentColor')
                            .attr('text-anchor', 'start')
                            .text(data.y1),
                    );

            svg.select('.x-axis').call(xAxis);
            svg.select('.y-axis').call(y1Axis);

            svg.select('.plot-area')
                .attr('fill', '#4563C9')
                .selectAll('.bar')
                .data(data)
                .join('rect')
                .attr('class', 'bar')
                .attr('x', (d) => x(d.name))
                .attr('width', x.bandwidth())
                .attr('y', (d) => y1(d.height))
                .attr('height', (d) => y1(0) - y1(d.height));
        },
        [data.length],
    );

    return (
        <svg
            ref={ref}
            style={{
                height: 500,
                width: 'calc(100% - 1rem)',
                background: '#F3F8FB',
                border: '1px solid #E1EDF4',
                'border-radius': '12px',
                'margin-top': '0.5rem',
            }}
        >
            <g className="plot-area" />
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
    );
}

export default BarChart;
