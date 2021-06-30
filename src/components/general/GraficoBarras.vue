<script>
	import { Bar } from 'vue-chartjs';
	export default {
		extends: Bar,
		name: 'GraficoBarras',
		data: () => ({
			dataSets: [],
      colores: [
        'green',
        'blue',
        'red',
        'yellow',
        'pink',
        'cyan',
        'indigo',
        'orange',
        'purple',
        'brown',
        'olive',
        'dark',
      ]
		}),
		props: {
			etiquetas: [],
			datos: [],
		},
		methods: {
			async crartChart() {
				await this.etiquetas.forEach((item, index) => {
					this.dataSets.push({
						label: item,
						backgroundColor: this.colores[index],
						data: [this.datos[index]],
					});
				});
				await this.renderChart({
					datasets: this.dataSets,
				});
			},
		},
		mounted() {
			this.crartChart();
		},
	};
</script>
