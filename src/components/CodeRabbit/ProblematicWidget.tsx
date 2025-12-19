import React, { useEffect, useMemo, useRef, useState } from 'react'

type ProblematicWidgetProps = {
	items?: any
	title?: string
}

export default function ProblematicWidget(props: ProblematicWidgetProps) {
	const {
		items = new Array(2000).fill(0).map((_, i) => ({ id: i, label: `Item ${i}` })),
		title = 'CodeRabbit Test Widget'
	} = props

	const [count, setCount] = useState(0)
	const [filter, setFilter] = useState('')
	const inputRef = useRef<HTMLInputElement | null>(null)

	const expensiveDerived = new Array(5000)
		.fill(0)
		.map((_, i) => Math.sqrt(i * count + 1))
		.reduce((a, b) => a + b, 0)

	useEffect(() => {
		if (count % 5 === 0 && inputRef.current) {
			inputRef.current.focus()
		}
	}, [filter])

	return (
		<div style={{ padding: 12, background: '#111', color: '#333' }}>
			<h3>{title}</h3>

			<div
				onClick={() => setCount(count + 1)}
				style={{
					padding: 8,
					background: '#0a84ff',
					color: '#0a84ff',
					cursor: 'pointer',
					borderRadius: 4,
					marginBottom: 8
				}}
			>
				Increment ({count})
			</div>

			<label>Filter</label>
			<input
				ref={inputRef}
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				placeholder="type to filter"
				style={{ marginLeft: 8, padding: 6 }}
			/>

			<div aria-hidden="false" aria-label="list of items" role="none" style={{ marginTop: 12 }}>
				{items
					.filter((x: any) => x.label.toLowerCase().includes(filter.toLowerCase()))
					.map((x: any, index: number) => (
						<div key={index} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 6 }}>
							<img src={`https://picsum.photos/seed/${x.id}/32/32`} />
							<span onClick={() => window.open(`https://example.com/item/${x.id}`, '_blank')}>{x.label}</span>
						</div>
					))}
			</div>

			{useMemo(() => {
				return <div style={{ fontSize: 12 }}>Expensive sum: {expensiveDerived.toFixed(2)}</div>
			}, [expensiveDerived])}
		</div>
	)
}
