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
              p.mb-4(data-aos="fade-right") En el PDF Ejemplos, se presenta una introducción al uso de cada software en la resolución de problemas de PL.
      
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
              '¿Cuál es la descripción correcta de las "Variables de decisión" en Programación Lineal?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Representan las cantidades que se deben determinar en el problema.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Es la expresión matemática que se busca maximizar o minimizar.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Conjunto de soluciones que cumplen con todas las restricciones.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Punto dentro de la región factible que optimiza la función objetivo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Las variables de decisión representan las cantidades que se deben determinar en el problema de Programación Lineal.',
            mensaje_incorrecto:
              'Incorrecto. Las variables de decisión son las incógnitas que se deben encontrar en el problema. La opción correcta es que representan las cantidades que se deben determinar.',
          },
          {
            id: 2,
            texto:
              'Complete los espacios en blanco con las opciones correctas. "La Programación Lineal permite optimizar _______________ en la toma de decisiones. Su aplicación principal es la resolución de problemas de _______________ y _______________ utilizando modelos matemáticos."',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Beneficios, dualidad, economía',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Recursos, maximización, minimización',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Factores, programación no lineal, restricciones',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Costos, expansión, desarrollo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La Programación Lineal permite optimizar recursos en la toma de decisiones y se aplica principalmente en problemas de maximización y minimización utilizando modelos matemáticos.',
            mensaje_incorrecto:
              'Incorrecto. La Programación Lineal se enfoca en optimizar recursos y resolver problemas de maximización (como maximizar ganancias) y minimización (como minimizar costos) mediante modelos matemáticos.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes afirmaciones describe mejor la función del método Simplex?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Es un método gráfico para resolver problemas con dos variables.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Es una técnica iterativa que encuentra soluciones óptimas en Programación Lineal.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Solo se utiliza en problemas de maximización.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Permite resolver ecuaciones diferenciales en entornos económicos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El método Simplex es una técnica algebraica iterativa que permite encontrar soluciones óptimas en problemas de Programación Lineal, tanto de maximización como de minimización.',
            mensaje_incorrecto:
              'Incorrecto. El método Simplex es una técnica iterativa algebraica (no gráfica) que encuentra soluciones óptimas en Programación Lineal. Puede aplicarse tanto a problemas de maximización como de minimización.',
          },
          {
            id: 4,
            texto:
              'La región factible de un problema de Programación Lineal siempre contiene la solución óptima.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La región factible es el conjunto de todas las soluciones que cumplen con las restricciones del problema, y la solución óptima siempre se encuentra dentro de esta región, generalmente en uno de sus vértices.',
            mensaje_incorrecto:
              'Incorrecto. La solución óptima de un problema de Programación Lineal siempre se encuentra dentro de la región factible, que es el conjunto de todas las soluciones que satisfacen las restricciones del problema.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el orden correcto de los pasos para resolver un problema de Programación Lineal?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Definir las variables de decisión → Construir la función objetivo → Identificar restricciones → Determinar la región factible → Resolver con un método adecuado → Analizar e interpretar la solución',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Identificar restricciones → Definir las variables de decisión → Construir la función objetivo → Determinar la región factible → Resolver con un método adecuado → Analizar e interpretar la solución',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Construir la función objetivo → Definir las variables de decisión → Identificar restricciones → Resolver con un método adecuado → Determinar la región factible → Analizar e interpretar la solución',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Determinar la región factible → Definir las variables de decisión → Construir la función objetivo → Identificar restricciones → Resolver con un método adecuado → Analizar e interpretar la solución',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El orden correcto comienza definiendo las variables de decisión, luego se construye la función objetivo, se identifican las restricciones, se determina la región factible, se resuelve con un método adecuado y finalmente se analiza e interpreta la solución.',
            mensaje_incorrecto:
              'Incorrecto. El orden correcto para resolver un problema de Programación Lineal es: primero definir las variables de decisión, luego construir la función objetivo, identificar las restricciones, determinar la región factible, resolver con un método adecuado y finalmente analizar e interpretar la solución.',
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
