<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        .bg-color-3.p-4.mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La Programación Lineal (PL), es una de las herramientas matemáticas más utilizadas en la toma de decisiones empresariales y la optimización de procesos. Se basa en la formulación de modelos matemáticos que permiten encontrar soluciones óptimas para problemas en los que intervienen múltiples variables y restricciones. Su aplicación se extiende a sectores claves como la producción, logística, gestión de inventarios y finanzas, permitiendo maximizar beneficios o minimizar costos, dentro de un conjunto de condiciones predefinidas.


        p A lo largo de esta unidad:

      .col-lg-4
        figure
          img(src="@/assets/curso/intro/2.png", style="max-width: 400px").mx-auto

    .row.mb-5
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/intro/3.png", style="max-width: 400px").mx-auto

      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-right")
          p(numero="1" titulo="Primero") Se explorarán los fundamentos de la Programación Lineal, desde su formulación matemática hasta la resolución de problemas reales, mediante métodos gráficos y algebraicos.
          p(numero="2" titulo="Segundo") Se analizarán los modelos de maximización y minimización, abordando su aplicación práctica en la administración de empresas.
          p(numero="3" titulo="Tercero") Se estudiarán los principales métodos de solución, incluyendo el método gráfico para problemas con dos variables y el método Simplex, una técnica avanzada que permite resolver problemas con múltiples restricciones y variables
          p(numero="4" titulo="Cuarto") Se introducirá el uso de herramientas computacionales como Excel Solver y GeoGebra, que facilitan la resolución de problemas de programación lineal, de manera automatizada, permitiendo a los profesionales tomar decisiones estratégicas fundamentadas en análisis cuantitativos


    .row.mb-5
      .col-lg-8
        .bg-color-6.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-2 La Programación Lineal (PL), es una herramienta matemática utilizada para optimizar la asignación de recursos en la toma de decisiones empresariales. Su objetivo principal es encontrar la mejor combinación posible de variables para maximizar beneficios o minimizar costos, cumpliendo con restricciones previamente definidas, como disponibilidad de materiales, tiempos de producción o capacidad operativa. A través de un enfoque estructurado basado en modelos matemáticos, la PL permite representar problemas del mundo real mediante tres componentes clave: variables de decisión, función objetivo y restricciones. Este método es ampliamente utilizado en diversos sectores como manufactura, logística, gestión de inventarios y planeación financiera, debido a su capacidad para mejorar la eficiencia operativa y la rentabilidad empresarial.
          p.mb-0 Dentro de su aplicación en la administración de empresas, la PL permite resolver preguntas estratégicas como:
        
        p(data-aos="fade-left") Dentro de su aplicación en la administración de empresas, la PL permite resolver preguntas estratégicas como:

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/intro/4.png", data-aos="zoom-in").mb-4.mb-lg-0
    

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 ¿Cómo reducir costos operativos sin afectar la calidad?
    
      .col-lg-6
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 ¿Cuál es la mejor forma de distribuir los recursos en diferentes proyectos?
    
    p.mb-5 Para abordar estos problemas, se han desarrollado métodos de solución como el método gráfico y el método Simplex; este último, diseñado para resolver problemas más complejos con múltiples restricciones. Además, herramientas computacionales como Excel Solver y GeoGebra, facilitan la resolución automatizada de estos modelos, permitiendo a las organizaciones mejorar su capacidad de respuesta en mercados dinámicos. A medida que se profundiza en su estudio, conceptos avanzados como la dualidad y el análisis de sensibilidad, permiten evaluar distintos escenarios y tomar decisiones más informadas frente a cambios en el entorno empresarial. Resumiendo:
        

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/intro/info1.png', alt='', style="max-width: 1199px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="11%" y="42%" numero="+")
                h5 Componentes principales
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Variables de decisión:] representan las opciones disponibles en el problema.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Función objetivo:] define si se busca maximizar o minimizar un resultado.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Restricciones:] condiciones que limitan las soluciones posibles.
                                
    
              .bg-color-white.box-shadow.p-3(x="30.5%" y="25%" numero="+")
                h5 Métodos de solución
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Método gráfico:] para problemas con dos variables, se resuelve mediante representación en un plano cartesiano.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Método Simplex:] algoritmo algebraico eficiente para problemas más complejos con múltiples variables.
                                
    
              .bg-color-white.box-shadow.p-3(x="50%" y="6%" numero="+")
                h5 Herramientas computacionales
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Excel Solver:] automatiza la solución de problemas de optimización.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong GeoGebra:] representación visual y análisis de soluciones factibles.
                        
    
              .bg-color-white.box-shadow.p-3(x="69.5%" y="25%" numero="+")
                h5 Aplicaciones en administración de empresas
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Producción:] determina la cantidad óptima de productos a fabricar.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Inventarios:] reduce costos de almacenamiento sin afectar la demanda.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Logística:] optimiza rutas de distribución y minimiza costos de transporte.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Planeación financiera:] asigna presupuesto de manera eficiente.
    
              .bg-color-white.box-shadow.p-3(x="89%" y="42%" numero="+")
                h5 Beneficios clave
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Optimización de recursos y reducción de costos.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Mejor toma de decisiones estratégicas.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Mayor competitividad en el mercado.
    

</template>
