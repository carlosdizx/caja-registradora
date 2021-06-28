<template>
	<v-card class="mx-auto" max-width="800" outlined>
		<v-list-item three-line>
			<v-list-item-content>
				<v-list-item-title class="text-h5 mb-1">
					{{ titulo }}
				</v-list-item-title>
				<v-list-item-subtitle>
					{{ subTitulo }}
				</v-list-item-subtitle>
			</v-list-item-content>

			<v-list-item-avatar :color="color" size="80">
				<v-icon size="60" dark>{{ icono }}</v-icon>
			</v-list-item-avatar>
		</v-list-item>

		<v-card-actions>
			<v-text-field :label="descripcion" disabled> </v-text-field>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: 'CardResumen',
		props: {
			titulo: String,
			subTitulo: String,
			descripcion: String,
			color: String,
			icono: String,
		},
	};
</script>

<style scoped></style>
