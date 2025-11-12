<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Métodos de solución'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/1.png', alt='')

        .col-lg-8
          p.mb-4 En la Programación Lineal, una vez que se ha definido el problema con sus variables de decisión, función objetivo y restricciones, es necesario utilizar un método de solución que permita encontrar el valor óptimo. Existen diversos métodos que facilitan la resolución de estos problemas, entre los cuales destacan:

          .bg-color-3.p-4
            ul.lista-ul--color.color-dark.mb-4
              li.mb-4
                i.fas.fa-arrow-circle-right
                | #[strong El método gráfico,] utilizado para problemas con dos variables, donde la solución se encuentra mediante la representación visual de restricciones en un plano cartesiano.

              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[strong El método Simplex,] una técnica algebraica que permite resolver problemas de mayor complejidad con múltiples variables y restricciones (Hillier & Lieberman, 2010)
                     

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Método gráfico - Interpretación visual de soluciones


      p.mb-4(data-aos="fade-right") El método gráfico es una técnica visual utilizada en Programación Lineal para encontrar la solución óptima cuando el problema cuenta con solo dos variables de decisión. Su principal ventaja es la facilidad de interpretación mediante la representación geométrica de restricciones y la función objetivo en un sistema de coordenadas cartesianas (Puente Riofrío & Gavilánez Álvarez, 2018).

      p.mb-4(data-aos="fade-right") Los pasos del método gráfico, son:

      .row.align-items-center.mb-5
        .col-lg-8.order-2.order-lg-1
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Planteamiento del problema") 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Definir las #[strong variables de decisión].
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Establecer la #[strong función objetivo] a maximizar o minimizar.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Identificar las #[strong restricciones] del problema.
              
            div(numero="2" titulo="Graficación de restricciones")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Convertir cada restricción en una ecuación de recta.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Representar gráficamente las rectas en un plano cartesiano.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Determinar la #[strong región factible] (conjunto de soluciones que cumplen todas las restricciones).
              

              
            div(numero="3" titulo="Determinación de los puntos extremos")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Identificar los #[strong puntos donde se cruzan las rectas] de las restricciones.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Estos #[strong puntos representan posibles soluciones] óptimas.
              
              
            div(numero="4" titulo="Evaluación de la función objetivo") 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se sustituye cada punto extremo en la #[strong función objetivo].
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se elige el punto que #[strong maximiza o minimiza] el resultado, según el objetivo del problema.
                            

            p(numero="5" titulo="Interpretación del resultado") Se analiza la solución obtenida y su viabilidad en el contexto del problema.
              
        .col-lg-4.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema3/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      
      
      p.mb-5 Ahora, conozcamos las:


      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Ventajas del método gráfico" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Ventajas del método gráfico
              p #[strong Facilidad de interpretación.] Se pueden visualizar las restricciones y la región factible.

              p #[strong Útil para pequeños problemas.] Ideal para situaciones con dos variables de decisión.

              p #[strong Permite evaluar varias soluciones.] Se pueden comparar diferentes puntos extremos de manera intuitiva (Kong, 2013).
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Limitaciones del método gráfico" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Limitaciones del método gráfico
              p #[strong No se aplica a problemas con más de dos variables.] La representación gráfica en más dimensiones no es posible.
              p #[strong Puede ser inexacto en casos de intersecciones difíciles de identificar.] Si los valores no son enteros, puede haber margen de error.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-2.png', alt='')
      


      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white #[strong Alternativa.] Cuando el número de variables aumenta, se debe emplear el método Simplex, el cual permite resolver problemas más complejos de manera algebraica (Suñé, Fonollosa, Fernández & Sallán, 2016). 
      

      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Método Simplex – teoría y aplicación en problemas empresariales

      .row.mb-4
        .col-lg-8
          p(data-aos="fade-left") El #[strong método Simplex] es una técnica algebraica utilizada para resolver problemas de #[strong Programación Lineal (PL) con más de dos variables]. A diferencia del método gráfico, que se limita a dos dimensiones, el Simplex permite encontrar soluciones óptimas en problemas con múltiples restricciones y variables de decisión (Hillier & Lieberman, 2010). 
      
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-0 Su aplicación es clave en la administración de empresas, dado que permite optimizar costos, maximizar beneficios y mejorar la eficiencia operativa en diversas áreas como producción, logística e inventarios.


          p(data-aos="fade-left") El método Simplex se basa en los siguientes conceptos:
      
        .col-lg-4.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      
    

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-1.png")
              .col-lg-7.order-lg-1
                h5 Espacio de soluciones factibles
                p Cada restricción en un problema de Programación Lineal, limita los valores posibles de las variables de decisión. El conjunto de todas las soluciones que cumplen con todas las restricciones simultáneamente forma lo que se conoce como el espacio factible.
                p En problemas de dos variables, este espacio se representa como una región en el plano cartesiano (una figura geométrica cerrada como un polígono). En problemas con tres o más variables, el espacio factible se extiende a dimensiones superiores y toma la forma de un poliedro n-dimensional.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-2.png")
              .col-lg-7.order-lg-1
                h5 Vértices o puntos básicos factibles
                p El Simplex examina los vértices del espacio factible para encontrar la mejor solución. Cada vértice representa un conjunto de valores para las variables de decisión.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-3.png")
              .col-lg-7.order-lg-1
                h5 Función objetivo
                p Como en cualquier problema de Programación Lineal, la función objetivo define lo que se busca maximizar o minimizar (por ejemplo, ingresos o costos).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-3.png")
              .col-lg-7.order-lg-1
                h5 Criterio de mejora
                p El método Simplex avanza iterativamente de un vértice a otro, evaluando si la nueva solución mejora el resultado de la función objetivo. Si no hay más mejoras posibles, se encuentra la solución óptima.



      p(data-aos="fade-left").mb-4 Y estudiemos las:

      .row.align-items-center.mb-5
        .col-lg-7
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Ventajas del método Simplex")
              p #[strong Eficiencia en problemas con muchas variables.] Puede manejar sistemas con decenas o cientos de restricciones.

              p #[strong Proporciona soluciones óptimas exactas] sin necesidad de representación gráfica.

              p #[strong Se adapta a software de optimización] como Excel Solver y GeoGebra (Puente Riofrío & Gavilánez Álvarez, 2018).

            div(numero="2" titulo="Limitaciones del método Simplex") 
              p #[strong No es aplicable a modelos no lineales.] Solo resuelve problemas en los que la función objetivo y restricciones son lineales. 

              p #[strong Complejidad computacional.] En problemas muy grandes, puede ser lento sin asistencia computacional.

        .col-lg-5.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema3/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      


      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://aulasvirtuales.uniquindio.edu.co/RecDigital/AlgebraLineal/recursos/unidad4/U4_EA1_descargable.pdf" target="_blank" rel="noopener noreferrer") González Duque, D. (s.f.). Unidad 4 - E.A. 1: Programación Lineal y Planteamiento de Problemas. Universidad del Quindío.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=NOvHQDI7kkI" target="_blank" rel="noopener noreferrer") Ingeniería Industrial Easy. (2016). COMO RESOLVER EJERCICIOS DE PROGRAMACION LINEAL CON SOLVER DE EXCEL | INVESTIGACION DE OPERACIONES. [Video]. YouTube.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.gestiondeoperaciones.net/#google_vignette" target="_blank" rel="noopener noreferrer") Blog sobre la Gestión e Investigación de Operaciones con tutoriales y ejercicios resueltos. (s.f.). Programación Lineal (Método Gráfico).

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=UtXnBuk0rjA" target="_blank" rel="noopener noreferrer") GOAL PROJECT. (2018, 16 de enero). Programación Lineal Problemas Clásicos 06. [Video]. YouTube.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
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
        ],
        mensaje_final_aprobado:
          '¡Felicitaciones! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
}
</script>
