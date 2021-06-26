<template>
	<v-card  class="mb-2">
		{{ producto }}
			<v-select
				v-model="producto"
				label="Seleccione producto"
				:items="items"
				item-text="nombre"
			/>
      <v-row>
        <v-col cols="3">
          <v-text-field v-model.number="cantidad" type="number" label="cantidad" />
        </v-col>
        <v-col cols="9">
          <v-text-field v-model.number="subtotal" disabled type="number" label="Subtotal" />
        </v-col>
      </v-row>
	</v-card>
</template>

<script>
	export default {
		name: 'ItemVenta',
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
