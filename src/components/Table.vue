<template>
	<table>
		<thead>
			<tr>
				<td>Name</td>
				<td>Year</td>
				<td>Color</td>
				<td>Country</td>
			</tr>
		</thead>

		<tbody>
			<tr v-for="row in contentSortedByName">
				<td v-for="value in row">{{ value }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	const mockData = `[{ "name": "Venture", "year": 1997, "color": "Khaki", "country": "Argentina" }, { "name": "Xterra", "year": 2006, "color": "Puce", "country": "Czech Republic" }, { "name": "Voyager", "year": 1992, "color": "Green", "country": "Guatemala" }, { "name": "C-MAX Hybrid", "year": 2013, "color": "Maroon", "country": "Russia" }, { "name": "Sable", "year": 1986, "color": "Maroon", "country": "Poland" }, { "name": "DTS", "year": 2011, "color": "Red", "country": "China" }, { "name": "E-Class", "year": 2001, "color": "Aquamarine", "country": "China" }, { "name": "Talon", "year": 1998, "color": "Green", "country": "Indonesia" }, { "name": "G", "year": 2004, "color": "Pink", "country": "China" }, { "name": "Tracker", "year": 1994, "color": "Crimson", "country": "Russia" }, { "name": "SC", "year": 2000, "color": "Fuscia", "country": "Portugal" }, { "name": "LS", "year": 2010, "color": "Khaki", "country": "China" }, { "name": "3 Series", "year": 1997, "color": "Indigo", "country": "Philippines" }, { "name": "Town Car", "year": 2006, "color": "Pink", "country": "China" }, { "name": "TT", "year": 2008, "color": "Indigo", "country": "China" }, { "name": "Sidekick", "year": 1992, "color": "Fuscia", "country": "Guinea" }, { "name": "I", "year": 1998, "color": "Purple", "country": "Portugal" }, { "name": "Impala", "year": 2002, "color": "Puce", "country": "Indonesia" }, { "name": "B-Series", "year": 2007, "color": "Yellow", "country": "Croatia" }, { "name": "L-Series", "year": 2000, "color": "Crimson", "country": "France" }]`;

	export default {
		data() {
			return {
				content: JSON.parse(mockData)
			}
		},

		computed: {
			contentSortedByName() {
				return this.content.sort((a, b) => {
					if (a.name > b.name) {
						return 1;
					} else if (a.name < b.name) {
						return -1;
					} else {
						return 0;
					}
				})
			}
		}
	}
</script>

<style>
	table {
		width: 80vw;
		border-collapse: collapse;
	}

	table thead {
		font-weight: bold;
	}

	table tr {
		border: 1px solid black;
	}

	table td {
		padding: 0.4em;
	}

</style>