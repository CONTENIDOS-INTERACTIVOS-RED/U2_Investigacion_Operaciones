<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Planteamiento de problemas de Programación Lineal'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 En el ámbito de la gestión empresarial, la eficiencia en la asignación de recursos es un factor determinante para el éxito organizacional. Una de las herramientas más utilizadas para este propósito es la Programación Lineal (PL), que permite modelar problemas en los que se busca maximizar o minimizar una función objetivo, bajo un conjunto de restricciones específicas (Puente Riofrío & Gavilánez Álvarez, 2018).
      
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Su aplicación abarca sectores como la producción, la logística, la gestión de inventarios y la planificación financiera, proporcionando soluciones basadas en modelos matemáticos que facilitan la toma de decisiones estratégicas.
      
          p(data-aos="fade-left") El proceso de planteamiento de un problema de PL es fundamental, porque define la estructura del modelo y permite representar matemáticamente situaciones del mundo real. Una correcta formulación del problema garantiza que las soluciones obtenidas, sean viables y útiles para la optimización de los recursos disponibles (Suñé, Fonollosa, Fernández & Sallán, 2016).
      
      h2(data-aos="fade-left").mb-5 Elementos claves en el planteamiento de un problema de Programación Lineal

      p El éxito en la aplicación de la Programación Lineal (PL) depende, en gran medida, de la correcta formulación del problema. Un modelo bien estructurado debe representar con precisión la realidad de la organización y permitir la optimización eficiente de los recursos disponibles. Para ello, es fundamental considerar los siguientes elementos claves en su planteamiento:

      .row.align-items-center.mb-5
        .col-lg-8.order-2.order-lg-1      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Objetivo claro y cuantificable") 
              p.mb-4 Todo problema de PL debe estar orientado a la #[strong maximización o minimización] de una función objetivo claramente definida, que represente una métrica clave dentro de la organización. Por ejemplo, una empresa puede buscar #[strong maximizar las ganancias] de sus productos o #[strong minimizar los costos] de producción y distribución (Hillier & Lieberman, 2010).

              p #[strong Ejemplo:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Maximizar la rentabilidad en la producción de artículos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Minimizar el tiempo de entrega en la logística de distribución.


            div(numero="2" titulo="Identificación de variables de decisión") 
              p.mb-4 #[strong Las variables de decisión] representan las cantidades que se controlan dentro del problema y que afectan directamente la #[strong función objetivo]. Deben definirse con claridad, para garantizar una formulación precisa del modelo (Kong, 2013).

              p #[strong Ejemplo:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | En una fábrica, las variables de decisión pueden ser la cantidad de unidades a producir de cada producto.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | En una empresa de transporte, pueden ser los vehículos asignados a distintas rutas.


            div(numero="3" titulo="Restricciones del problema")
              p.mb-4 Las #[strong   restricciones] representan los límites o condiciones bajo las cuales debe operar el sistema. Estas pueden estar relacionadas con la disponibilidad de recursos, capacidades de producción, presupuesto o demanda de productos (Puente Riofrío & Gavilánez Álvarez, 2018).

              p #[strong Ejemplo:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Un límite de 500 horas de producción disponible en una fábrica.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Un presupuesto máximo de $50,000, para publicidad en una campaña de marketing.


            div(numero="4" titulo="Linealidad de las relaciones") 
              p Para que un problema pueda resolverse mediante Programación Lineal, todas las ecuaciones y restricciones deben ser expresadas en forma lineal. Esto significa que las variables deben relacionarse entre sí mediante sumas, restas o multiplicaciones por constantes, sin involucrar potencias, logaritmos u otros términos no lineales (Suñé et al., 2016).

        .col-lg-4.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="5" titulo="Factibilidad de la solución")
              p.mb-4 El conjunto de restricciones debe definir una región factible, es decir, un conjunto de soluciones posibles que cumplan todas las condiciones del problema. Si la región factible es inexistente (sistema inconsistente), no habrá solución válida. Si la región factible es infinita, el problema puede no tener una solución óptima clara (Puente Riofrío & Gavilánez Álvarez, 2018).

              p #[strong Ejemplo:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Si una empresa debe producir al menos 100 unidades de un producto, pero el modelo sugiere fabricar 50, la solución no es factible.


            div(numero="6" titulo="Condiciones de no negatividad") En la mayoría de los casos, las variables de decisión representan cantidades físicas (productos, recursos, tiempo, etc.), por lo que #[strong deben ser valores positivos o cero]. Esto se expresa mediante la restricción de no negatividad.

            div(numero="7" titulo="Análisis de sensibilidad y robustez del modelo")
              p.mb-4 Los parámetros dentro de un modelo de PL pueden cambiar con el tiempo, ya sea en costos de producción, disponibilidad de recursos o demanda de los clientes. Por esta razón, es recomendable realizar un análisis de sensibilidad para evaluar cómo afecta la variación de los coeficientes a la solución óptima del problema (Suñé et al., 2016).

              p #[strong Ejemplo:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Si aumenta el costo de la materia prima, ¿cambia la cantidad óptima de productos a fabricar?

          
      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white #[b Reflexión]
              p.mb-0.text-white El planteamiento de un problema de Programación Lineal, es un paso esencial para garantizar que el modelo refleje fielmente la realidad organizacional y permita encontrar soluciones óptimas y factibles. Un modelo bien formulado proporciona herramientas poderosas para la toma de decisiones estratégicas, ayudando a las empresas a optimizar costos, mejorar la eficiencia operativa y maximizar sus beneficios. 
      



      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Identificación de variables, función objetivo y restricciones


      .row.mb-5
        .col-lg-8
          .bg-color-3.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Para construir un modelo de #[strong Programación Lineal (PL)] efectivo, es fundamental comprender y definir correctamente tres elementos esenciales: las variables de decisión, la #[strong función objetivo] y las #[strong restricciones].
      
          p(data-aos="fade-left") Estos elementos permiten estructurar el problema de manera que pueda resolverse matemáticamente y proporcionar una solución óptima a una situación real.

          h3(data-aos="fade-left").mb-4 Identificación de variables de decisión
      
          p(data-aos="fade-left") Las variables de decisión representan las cantidades que la empresa o el tomador de decisiones puede controlar y modificar dentro del problema. Estas variables deben estar bien definidas y cuantificadas, porque afectan directamente la función objetivo y las restricciones.

          p Ejemplo de variables de decisión:
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      
      
      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-1.png")
              .col-lg-7
                h4 En una fábrica de muebles
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | x₁ = Número de sillas a fabricar.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | x₂ = Número de mesas a fabricar.
                                
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-2.png")
              .col-lg-7
                h4 En una aerolínea
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | x₁ = Número de asientos vendidos en clase económica.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | x₂ = Número de asientos vendidos en clase ejecutiva.
                                
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-3.png")
              .col-lg-7
                h4 En logística
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | x₁ = Cantidad de productos enviados desde el almacén 1.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | x₂ = Cantidad de productos enviados desde el almacén 2.
                
    
      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white #[b Consejo:]
              p.mb-0.text-white #[strong Cada variable debe tener un significado claro] dentro del contexto del problema y estar expresada en unidades específicas (cantidad de productos, tiempo en horas, volumen de producción). 
      

      h2(data-aos="fade-left").mb-5 Función objetivo

      p.mb-4 La #[strong función objetivo] expresa matemáticamente el propósito del modelo, es decir, lo que se busca #[strong maximizar] o #[strong minimizar]. Generalmente, se relaciona con:

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6
          .bg-color-4.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Primero
                p.mb-0 Maximización de beneficios, ingresos o eficiencia.
      
        .col-lg-6
          .bg-color-4.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Segundo
                p.mb-0 Minimización de costos, tiempos o desperdicios.
      

      .row.mb-5
        .col-lg-8
          p.mb-4 Ejemplo de formulación de función objetivo:

          .bg-color-3.p-4.px-lg-5(data-aos="fade-left")
            p.mb-4 Si una empresa quiere maximizar sus ganancias vendiendo dos productos A y B, con ganancias unitarias de $50 y $40, respectivamente, la función objetivo será: Z = 50x₁ + 40x₂ 

            p.mb-4 Donde:

            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Z = Ganancia total

              li.mb-0
                i.fas.fa-arrow-circle-right
                | x₁ = Cantidad del producto A

              li.mb-0
                i.fas.fa-arrow-circle-right
                | x₂ = Cantidad del producto B


        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")  
      


      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white #[b Consejo:]
              p.mb-0.text-white La función objetivo siempre debe ser una ecuación lineal, expresada en términos de las variables de decisión y sus coeficientes. 


      h2(data-aos="fade-left").mb-5 Identificación de restricciones

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")

        .col-lg-8
          p.mb-4 Las restricciones representan los límites o condiciones impuestas por el problema. Estas pueden estar relacionadas con:

          .bg-color-3.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Disponibilidad de recursos (materia prima, tiempo de producción, presupuesto).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Capacidad de producción o transporte (número máximo de unidades que pueden producirse o enviarse).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Demandas o requerimientos mínimos (mínimos pedidos por los clientes o estándares de calidad).
            
            p Ejemplo de formulación de restricciones:
            
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2-1.png")
              .col-lg-7.order-lg-1
                p Si una empresa dispone de #[strong 100 horas de producción] y fabricar cada producto requiere cierto tiempo, la restricción se expresa como:
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | 2x₁ + x₂ ≤ 100 → Tiempo total disponible para la producción.
                
                ul.lista-ul.mb-3
                  li
                    | ⊕ 2x₁: Horas requeridas para fabricar cada unidad del producto A.

                  li
                    | ⊕ x₂: Horas necesarias para fabricar cada unidad del producto B.

                  li
                    | ⊕ 100: Tiempo máximo disponible.

                
                
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2-2.png")
              .col-lg-7.order-lg-1
                p Si la empresa cuenta con #[strong 90 unidades de materia prima], la restricción será:
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | x₁ + 3x₂ ≤ 90 → Límite de materia prima.
                
                ul.lista-ul.mb-3
                  li
                    | ⊕ x₁: Unidades del producto A para fabricar.
                  li
                    | ⊕ 3x₂: Materia prima requerida para cada unidad del producto B.
                  li
                    | ⊕ 90: Disponibilidad total de materia prima.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2-3.png")
              .col-lg-7.order-lg-1
                p Finalmente, para asegurar que las soluciones sean viables, se impone la restricción de #[strong no negatividad]:
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | x₁, x₂ ≥ 0 → No se pueden fabricar cantidades negativas de productos.


      .row.mb-5.align-items-stretch
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")

        .col-lg-8
          .bg-color-2.p-4.h-100
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-3 #[strong Consejo:]
                p.mb-0 Todas las restricciones deben formularse en ecuaciones o inecuaciones lineales que representen adecuadamente los límites del problema. (Las variables deben ser no negativas, debido a que no se pueden producir cantidades negativas de productos.) 
          

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Ejemplos prácticos en áreas como logística, inventarios y producción


      p.mb-4 La #[strong Programación Lineal (PL)] es una herramienta fundamental en la toma de decisiones empresariales, permitiendo optimizar el uso de recursos y maximizar o minimizar funciones objetivo, en diversos sectores. A continuación, se presentan tres ejemplos prácticos en #[strong logística, inventarios y producción], formulados con modelos matemáticos de fácil comprensión.


      .row.align-items-center.mb-5
        .col-lg-8      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Ejemplo 1. Optimización de rutas en logística")
              p.mb-4 #[strong Contexto.] Una empresa de transporte busca minimizar los costos de envío de productos desde #[strong dos almacenes] hasta #[strong tres tiendas].
              
              p.mb-4 #[strong Modelo matemático]
              
              p.mb-2 #[strong 1.] Definir variables de decisión.
              ul.lista-ul.mb-4.ps-4
                li
                  | ⊕ x₁ = Cantidad enviada desde el Almacén 1.
                li
                  | ⊕ x₂ = Cantidad enviada desde el Almacén 2.
              
              p.mb-2 #[strong 2.] Función objetivo (minimización de costos de transporte).
              ul.lista-ul.mb-4.ps-4
                li
                  | ⊕ Z = 5x₁ + 4x₂ (donde 5 y 4 son los costos de transporte por unidad desde cada almacén).

              p.mb-2 #[strong 3.] Restricciones.
              ul.lista-ul.mb-4.ps-4
                li
                  | ⊕ x₁ + x₂ ≥ 200 (Deben cubrir la demanda de 200 unidades).
                li
                  | ⊕ x₁ ≤ 150 (Capacidad máxima del Almacén 1).
                li
                  | ⊕ x₂ ≤ 100 (Capacidad máxima del Almacén 2).
                li
                  | ⊕ x₁, x₂ ≥ 0 (No pueden ser valores negativos).

              p.mb-2 #[strong Solución.] Se puede resolver gráficamente o mediante el método Simplex, para determinar la combinación óptima que minimiza los costos.
                  

            div(numero="2" titulo="Ejemplo 2. Gestión de inventarios")
              p.mb-4 #[strong Contexto.] Una empresa busca #[strong minimizar los costos de almacenamiento] de dos productos en su bodega, asegurando suficiente stock para la demanda.
              
              p.mb-4 #[strong Modelo matemático]
              
              p.mb-2 #[strong 1.] Definir variables de decisión.
              ul.lista-ul.mb-4.ps-4
                li
                  | ⊕ x₁ = Cantidad del Producto A almacenado.
                li
                  | ⊕ x₂ = Cantidad del Producto B almacenado.
              
              p.mb-2 #[strong 2.] Función objetivo (minimización de costos de almacenamiento).
              ul.lista-ul.mb-4.ps-4
                li
                  | ⊕ Z = 2x₁ + 3x₂ (donde 2 y 3 son los costos de almacenamiento por unidad de cada producto).

              p.mb-2 #[strong 3.] Restricciones.
              ul.lista-ul.mb-4.ps-4
                li
                  | ⊕ x₁ + x₂ ≤ 500 (Capacidad máxima del almacén).
                li
                  | ⊕ x₁ ≥ 100 (Se debe almacenar al menos 100 unidades del Producto A).
                li
                  | ⊕ x₂ ≥ 150 (Se debe almacenar al menos 150 unidades del Producto B).
                li
                  | ⊕ x₁, x₂ ≥ 0 (No pueden ser valores negativos).


            div(numero="3" titulo="Ejemplo 3. Planificación de producción")
              p.mb-4 #[strong Contexto.] Una fábrica produce #[strong mesas y sillas] y busca #[strong maximizar sus ganancias] utilizando recursos limitados de madera y horas de trabajo.
              
              p.mb-4 #[strong Modelo matemático]
              
              p.mb-2 #[strong 1.] Definir variables de decisión.
              ul.lista-ul.mb-4.ps-4
                li
                  | ⊕ x₁ = Cantidad de mesas producidas.
                li
                  | ⊕ x₂ = Cantidad de sillas producidas.
              
              p.mb-2 #[strong 2.] Función objetivo (maximización de ganancias).
              ul.lista-ul.mb-4.ps-4
                li
                  | ⊕ Z = 50x₁ + 30x₂ (donde 50 y 30 son las ganancias por cada mesa y silla producida, respectivamente).

              p.mb-2 #[strong 3.] Restricciones.
              ul.lista-ul.mb-4.ps-4
                li
                  | ⊕ 8x₁ + 4x₂ ≤ 500 (Cada mesa usa 8 unidades de madera y cada silla 4).
                li
                  | ⊕ 2x₁ + x₂ ≤ 120 (Cada mesa requiere 2 horas de trabajo y cada silla 1).
                li
                  | ⊕ x₂ ≤ 100 (Máximo de 100 sillas demandadas).
                li
                  | ⊕ x₁, x₂ ≥ 0 (No pueden ser valores negativos).

              p.mb-2 #[strong Solución.] Se encuentra la combinación óptima de mesas y sillas que maximiza las ganancias sin exceder los recursos disponibles.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/16.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      

      .bg-full-width.bg-color-2
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/18.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Ejemplos en modelos de maximización y minimización
              p.mb-4(data-aos="fade-right") La Programación Lineal es una herramienta esencial para la toma de decisiones estratégicas en distintos ámbitos empresariales, permitiendo optimizar el uso de recursos y mejorar la eficiencia operativa. En el PDF Ejemplos en modelos de maximización y minimizació n, se presentan casos detallados en los que se aplican técnicas de optimización para maximizar beneficios o minimizar costos en diversos contextos, como la producción, la logística y la gestión de proyectos. Cada ejemplo incluye la formulación del problema, la definición de variables de decisión, la construcción de la función objetivo y las restricciones, así como una resolución paso a paso para comprender su aplicación práctica.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ejemplos en modelos de maximización y minimización
      
       

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
