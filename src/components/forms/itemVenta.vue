<template>
	<v-card>
		{{ producto }}
		<v-container>
			<v-select
				v-model="producto"
				label="Seleccione producto"
				:items="items"
				item-text="nombre"
			/>
			<v-text-field v-model.number="cantidad" type="number" label="cantidad" />
			<v-text-field v-model.number="subtotal" disabled type="number" label="Subtotal" />
		</v-container>
	</v-card>
</template>

<script>
	export default {
		name: 'itemVenta',
		data: () => ({
			producto: null,
			cantidad: 1,
			subtotal: 0,
		}),
		props: {
			items: [],
		},
	};
</script>

<style scoped></style>
