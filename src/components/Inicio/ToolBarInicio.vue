<template>
	<v-card>
		<v-toolbar :color="color" dark flat>
			<!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
			<v-toolbar-title>{{ titulo }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn @click="cerrarSesion" icon>
				<v-icon>mdi-exit-to-app</v-icon>
			</v-btn>
			<template v-slot:extension>
				<v-tabs v-model="tab" align-with-title>
					<v-tabs-slider color="red"></v-tabs-slider>
					<router-link
						v-for="item in tabs"
						:key="item.name"
						:to="item.link"
						v-slot="{ navigate }"
						custom
					>
						<v-tab @click="navigate">
							{{ item.name }}
						</v-tab>
					</router-link>
				</v-tabs>
			</template>
		</v-toolbar>
	</v-card>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'ToolBarInicio',
		data: () => ({
			tab: null,
		}),
		props: {
			tabs: null,
			color: String,
			titulo: String,
		},
		methods: {
			...mapActions(['cerrarSesion']),
		},
	};
</script>

<style scoped></style>
