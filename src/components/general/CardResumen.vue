<template>
	<v-card class="mx-auto" max-width="800" outlined>
		<v-list-item three-line>
			<v-list-item-content>
				<div class="text-overline mb-4">
					{{ subTitulo }}
				</div>
				<v-list-item-title class="text-h5 mb-1">
					{{ titulo }}
				</v-list-item-title>
				<v-list-item-subtitle>
					{{ descripcion }}
				</v-list-item-subtitle>
			</v-list-item-content>

			<v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
		</v-list-item>

		<v-card-actions>
			<v-btn outlined rounded text>
				Button
			</v-btn>
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
		},
	};
</script>

<style scoped></style>
