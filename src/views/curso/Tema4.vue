<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Uso de herramientas computacionales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
        .col-lg-7
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El uso de herramientas computacionales ha revolucionado la forma en que se abordan los modelos matemáticos, permitiendo soluciones más rápidas, precisas y eficientes. Software como Excel (Solver) y GeoGebra, han demostrado ser aliados estratégicos en la optimización de recursos y la toma de decisiones empresariales, facilitando la modelación, resolución e interpretación de problemas en tiempo real.
      
          p(data-aos="fade-left").mb-4 En este tema, se explorará cómo utilizar estas herramientas para resolver problemas de programación lineal, tanto en su forma gráfica como analítica. Se proporcionarán ejemplos detallados sobre la maximización de ganancias, la minimización de costos y la optimización de procesos productivos, mediante la implementación de #[strong Solver en Excel y GeoGebra]. El objetivo es que los estudiantes comprendan la importancia de la tecnología en la administración de recursos y aprendan a utilizar estas herramientas para la toma de decisiones estratégicas basadas en modelos cuantitativos.


      #t_4_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.1] Introducción al uso de software como Excel (Solver) y GeoGebra, para resolver problemas de programación lineal
      
      
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") En la actualidad, el uso de herramientas computacionales es fundamental para resolver problemas de Programación Lineal (PL) de manera rápida y eficiente. Software como Excel (Solver) y GeoGebra, permiten modelar y solucionar problemas de optimización mediante interfaces amigables que facilitan la interpretación de resultados (Hillier & Lieberman, 2010).
      
          .bg-color-6.p-4(data-aos="fade-left")
            p.mb-0 El uso de estas herramientas es crucial en la toma de decisiones empresariales, puesto que permiten optimizar recursos y maximizar o minimizar funciones objetivo de manera automatizada. 
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")


      
      .bg-full-width.bg-color-2
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/4.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Ejemplos en modelos de maximización y minimización
              p.mb-4(data-aos="fade-right") En el PDF Ejemplos , se presenta una introducción al uso de cada software en la resolución de problemas de PL.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ejemplos


      .bg-full-width.bg-color-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white #[strong Reflexión.]

              p.mb-0.text-white El uso de herramientas computacionales como Solver en Excel y GeoGebra, facilita la solución de problemas de Programación Lineal. Mientras que Solver permite encontrar soluciones óptimas de manera automatizada, GeoGebra es útil para comprender visualmente cómo se estructura un problema de optimización. Ambas herramientas son esenciales para la toma de decisiones estratégicas, en administración de empresas. 
      
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/96392" target="_blank" rel="noopener noreferrer") Domínguez, E. (2010). System-Solver, una herramienta de código abierto para la modelación de sistemas dinámicos. Ingeniería e Investigación, 30 (3), 157-164: ( ed.). D - Ingeniería e Investigación.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=nmp4zwWXoWA" target="_blank" rel="noopener noreferrer") Hernández, A. (2020, 27 de marzo). Método Simplex utilizando Solver de Excel. [Video]. YouTube.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://support.microsoft.com/es-es/office/definir-y-resolver-un-problema-con-solver-5d1a388f-079d-43ac-a7eb-f63e45925040" target="_blank" rel="noopener noreferrer") Microsoft (S.F.) Definir y resolver un problema con Solver.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Metodología de Investigación de Operaciones',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el orden correcto de las fases en la metodología de Investigación de Operaciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Modelación, Definición del problema, Solución, Validación, Implementación',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Definición del problema, Modelación, Solución, Validación, Implementación',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Definición del problema, Solución, Modelación, Implementación, Validación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Modelación, Solución, Definición del problema, Validación, Implementación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Este es el orden adecuado de las fases metodológicas en la Investigación de Operaciones.',
            mensaje_incorrecto:
              'El orden correcto comienza con la definición del problema, seguido de la modelación matemática.',
          },
          {
            id: 2,
            texto:
              'Indique si la siguiente afirmación es verdadera o falsa: "En la fase de validación se construyen modelos matemáticos para representar el problema".',
            imagen: '',
            barajarRespuestas: false,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La construcción de modelos matemáticos corresponde a la fase de modelación, no a la de validación.',
            mensaje_incorrecto:
              'Incorrecto. En la fase de validación se prueba la solución para garantizar su viabilidad. La construcción de modelos matemáticos corresponde a la fase de modelación.',
          },
          {
            id: 3,
            texto:
              'Seleccione la opción que completa correctamente los espacios en blanco: "La Investigación de Operaciones utiliza __________ para analizar problemas administrativos, aplica __________ para evaluar decisiones y se apoya en __________ para representar situaciones complejas."',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'modelos matemáticos - técnicas estadísticas - simulaciones computacionales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'técnicas estadísticas - simulaciones computacionales - modelos matemáticos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'simulaciones computacionales - eficiencia operativa - recursos humanos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'procesos administrativos - desarrollo de productos - clientes estratégicos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Las técnicas estadísticas se utilizan para analizar problemas, las simulaciones computacionales para evaluar decisiones y los modelos matemáticos para representar situaciones complejas.',
            mensaje_incorrecto:
              'La secuencia correcta es: técnicas estadísticas para análisis, simulaciones computacionales para evaluación y modelos matemáticos para representación.',
          },
          {
            id: 4,
            texto:
              '¿Qué beneficios ofrece la aplicación de modelos probabilísticos en la Investigación de Operaciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Generan resultados exactos en entornos predecibles',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Analizan escenarios inciertos y permiten una toma de decisiones flexible',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminan la necesidad de herramientas computacionales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Se utilizan únicamente en el sector financiero',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Los modelos probabilísticos son esenciales para manejar incertidumbres y analizar diferentes escenarios.',
            mensaje_incorrecto:
              'Los modelos probabilísticos son especialmente útiles en situaciones de incertidumbre, permitiendo analizar diferentes escenarios y tomar decisiones más flexibles.',
          },
          {
            id: 5,
            texto:
              'La programación lineal se utiliza exclusivamente para resolver problemas de maximización.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
