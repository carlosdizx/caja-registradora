<template>
	<v-card>
		<v-toolbar :color="color" dark flat>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-toolbar-title>{{ titulo }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
			<template v-slot:extension>
				<v-tabs v-model="tab" align-with-title>
					<v-tabs-slider color="yellow"></v-tabs-slider>
					<v-tab v-for="item in tabs" :key="item">
						{{ item }}
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

<style scoped></style>
