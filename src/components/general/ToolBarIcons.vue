<template>
	<v-card>
		<v-toolbar :color="color" dark flat>
			<v-app-bar-nav-icon>
				<router-link to="/inicio" v-slot="{ navigate }" custom>
					<v-btn @click="navigate" role="link" icon>
						<v-icon>mdi-arrow-left</v-icon>
					</v-btn>
				</router-link>
			</v-app-bar-nav-icon>
			<v-toolbar-title>{{ titulo }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<template v-slot:extension>
				<v-tabs v-model="tab" align-with-title>
					<v-tabs-slider color="yellow"></v-tabs-slider>
					<v-tab v-for="item in tabs" :key="item">
						<v-icon>
							{{ item }}
						</v-icon>
					</v-tab>
				</v-tabs>
			</template>
		</v-toolbar>
	</v-card>
</template>

<script>
	export default {
		name: 'ToolBar',
		data: () => ({
			tab: null,
		}),
		props: {
			tabs: null,
			color: String,
			titulo: String,
		},
	};
</script>
