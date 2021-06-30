<script>
	import { Bar } from 'vue-chartjs';
	export default {
		extends: Bar,
		name: 'GraficoBarras',
		data: () => ({
			dataSets: [],
		}),
		props: {
			etiquetas: [],
			colores: [],
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
				this.renderChart({
					datasets: this.dataSets,
				});
			},
		},
		mounted() {
			this.crartChart();
		},
	};
</script>
