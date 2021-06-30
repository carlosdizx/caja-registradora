<template>
	<div>
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
						<v-tabs-slider color="white"></v-tabs-slider>
						<v-tab
							@click="cambiarIndex(index + 1)"
							v-for="(item, index) in tabs"
							:key="item"
						>
							<v-icon>
								{{ item }}
							</v-icon>
						</v-tab>
					</v-tabs>
				</template>
			</v-toolbar>
		</v-card>
    <div class="container">
      <v-container>
        <GraficaProductos v-if="index===2" />
      </v-container>
    </div>
	</div>
</template>

<script>
import GraficaProductos from "./GraficaProductos";
	export default {
		name: 'ToolBar',
		components: {GraficaProductos},
		data: () => ({
			tab: null,
			index: 3,
		}),
		props: {
			tabs: null,
			color: String,
			titulo: String,
		},
		methods: {
			cambiarIndex(index) {
				this.index = index;
			},
		},
	};
</script>
