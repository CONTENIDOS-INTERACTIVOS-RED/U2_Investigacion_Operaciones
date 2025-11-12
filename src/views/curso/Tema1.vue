<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a la Programación Lineal'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Conceptos básicos y aplicaciones en la administración.

    .bg-full-width-2.bg-fondo-1.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-start.mb-5
          .col-lg-8
            .bg-color-2.p-4.mb-4
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 La Programación Lineal (PL), es una herramienta matemática fundamental utilizada para optimizar el uso de recursos limitados con el objetivo de alcanzar metas específicas, como maximizar beneficios o minimizar costos. En términos sencillos, la PL permite responder preguntas claves en la gestión empresarial; por ejemplo: "¿Cómo se puede obtener el mayor beneficio posible con los recursos disponibles?" o "¿De qué forma se pueden reducir costos sin comprometer la calidad?" (Puente Riofrío & Gavilánez Álvarez, 2018). Esta técnica es clave en la administración de empresas, dado que facilita la formulación de modelos matemáticos que representan problemas reales, lo que contribuye a una toma de decisiones efectiva y basada en datos.


            p El proceso de formulación de un modelo de PL, está compuesto por tres elementos principales:

          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/2.png", style="max-width: 400px").mx-auto


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Variables de decisión
                p.mb-0 Representan las decisiones a tomar, como la cantidad de productos a fabricar o los recursos a asignar (Kong, 2013).
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Función objetivo
                p.mb-0 Define el propósito del modelo, que puede ser maximizar ingresos o minimizar costos (Suñé, Fonollosa, Fernández & Sallán, 2016).
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Restricciones
                p.mb-0 Son las condiciones o limitaciones que deben cumplirse, como el presupuesto disponible, tiempos de producción o la disponibilidad de materias primas (Hillier & Lieberman, 2010).
        


    h2(data-aos="fade-left") Aplicaciones de la Programación Lineal en la administración de empresas

    p.mb-5 La Programación Lineal posee diversas aplicaciones prácticas en la administración de empresas, tales como:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7
              h5 Planificación de la producción
              p Determina la combinación óptima de productos a fabricar, teniendo en cuenta la demanda del mercado y los recursos disponibles (Puente Riofrío & Gavilánez Álvarez, 2018).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7
              h5 Gestión de inventarios
              p Establece niveles de stock óptimos, reduciendo los costos de almacenamiento y evitando problemas de escasez (Kong, 2013).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 Logística y distribución
              p Optimiza las rutas de transporte para reducir costos y mejorar los tiempos de entrega (Suñé, Fonollosa, Fernández & Sallán, 2016).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 Asignación de recursos
              p Distribuye de manera eficiente el capital, tiempo y personal entre diversos proyectos y departamentos (Hillier & Lieberman, 2010).
    

    h2(data-aos="fade-left") Avance hacia conceptos más avanzados

    p.mb-5 A medida que se profundiza en el estudio de la Programación Lineal, se exploran conceptos avanzados, incluyendo:

    .row.align-items-center.mb-5
      .col-lg-8    
        LineaTiempoD.color-primario.large(data-aos="fade-right")
          p(numero="1" titulo="Método Simplex") Un algoritmo esencial para resolver problemas que incluyen múltiples variables y restricciones, proporcionando soluciones óptimas (Hillier & Lieberman, 2010).
          p(numero="2" titulo="Dualidad") Relación entre un problema de PL y su problema dual, lo que ofrece información adicional para la toma de decisiones estratégicas (Kong, 2013).
          p(numero="3" titulo="Análisis de sensibilidad") Evalúa cómo los cambios en los parámetros del modelo afectan la solución óptima, lo que brinda flexibilidad a las organizaciones frente a los cambios del entorno (Puente Riofrío & Gavilánez Álvarez, 2018).

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Estos conceptos avanzados proporcionan a los administradores, herramientas para abordar problemas más complejos y adaptarse a entornos empresariales dinámicos.
    

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Modelos de maximización y minimización

    p.mb-5 Para conocer sobre esta temática, lo invitamos a ver el siguiente video.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/WGLvaNS90Ek?si=-kP0Hik1IJm93xMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/79351" target="_blank" rel="noopener noreferrer") Kong, M. (2013). Investigación de operaciones: programación lineal. Problemas de transporte. Análisis de redes: ( ed.). Fondo Editorial de la Pontificia Universidad Católica del Perú.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/61485" target="_blank" rel="noopener noreferrer") Suñé, A. Fonollosa, J. B. & Fernández, V. (2016). Programación lineal: métodos cuantitativos para la toma de decisiones: ( ed.). Universitat Politècnica de Catalunya.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Qfu1TJ8Ii0o?si=nh4E-j-sBnKhEC4B" target="_blank" rel="noopener noreferrer") Facultad de Ciencias Económicas – UNRC (2020, 14 de mayo) Principios de Administración - El Control. [Video] YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
