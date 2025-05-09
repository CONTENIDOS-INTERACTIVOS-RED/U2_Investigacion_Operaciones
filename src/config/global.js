export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Programación Lineal y métodos de solución',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos y aplicaciones en la administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Generalidades de la Programación Lineal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modelos de maximización y minimización',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planteamiento de problemas de Programación Lineal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Identificación de variables, función objetivo y restricciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Ejemplos prácticos en áreas como logística, inventarios y producción',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos de solución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Método gráfico - Interpretación visual de soluciones',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Método Simplex – teoría y aplicación en problemas empresariales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Uso de herramientas computacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Introducción al uso de software como Excel (Solver) y GeoGebra, para resolver problemas de programación lineal',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Kong, M. (2013). Investigación de operaciones: programación lineal. Problemas de transporte. Análisis de redes: ( ed.). Fondo Editorial de la Pontificia Universidad Católica del Perú.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/79351',
    },
    {
      referencia:
        'Suñé, A. Fonollosa, J. B. & Fernández, V. (2016). Programación lineal: métodos cuantitativos para la toma de decisiones: ( ed.). Universitat Politècnica de Catalunya.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61485',
    },
    {
      referencia:
        'Puente Riofrío, M. I., & Gavilánez Álvarez, Ó. D. (2018). Programación lineal para la toma de decisiones. Escuela Superior Politécnica de Chimborazo.',
      link:
        'https://cimogsys.espoch.edu.ec/direccion-publicaciones/public/docs/books/2019-09-19-210805-58%20Libro%20Programacio%CC%81n%20Lineal%20final.pdf',
    },
    {
      referencia: 'Microsoft (S.F.) Definir y resolver un problema con Solver.',
      link:
        'https://support.microsoft.com/es-es/office/definir-y-resolver-un-problema-con-solver-5d1a388f-079d-43ac-a7eb-f63e45925040',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de Sensibilidad',
      significado:
        'Evalúa cómo los cambios en los parámetros afectan la solución óptima en Programación Lineal.',
    },
    {
      termino: 'Aplicaciones de PL',
      significado:
        'Uso de PL en producción, logística, inventarios y planeación financiera para optimizar recursos.',
    },
    {
      termino: 'Dualidad',
      significado:
        'Relación entre un problema de PL y su versión dual, proporcionando información adicional para decisiones.',
    },
    {
      termino: 'Excel Solver',
      significado:
        'Herramienta de optimización en Excel para resolver modelos de Programación Lineal de manera automatizada.',
    },
    {
      termino: 'Función Objetivo',
      significado:
        'Expresión matemática que se maximiza o minimiza en un problema de Programación Lineal.',
    },
    {
      termino: 'GeoGebra',
      significado:
        'Software matemático que permite visualizar y resolver gráficamente problemas de optimización lineal.',
    },
    {
      termino: 'Maximización',
      significado:
        'Modelo de PL enfocado en obtener el mayor beneficio posible dentro de las restricciones dadas.',
    },
    {
      termino: 'Método Gráfico',
      significado:
        'Técnica visual para resolver problemas de PL con dos variables mediante representación en un plano cartesiano.',
    },
    {
      termino: 'Método Simplex',
      significado:
        'Algoritmo para resolver problemas de PL con múltiples restricciones y variables de decisión.',
    },
    {
      termino: 'Minimización',
      significado:
        'Modelo de PL que busca reducir costos, tiempos o desperdicios sin comprometer calidad ni eficiencia.',
    },
    {
      termino: 'Modelo Matemático',
      significado:
        'Representación formal de un problema real usando ecuaciones y restricciones en PL.',
    },
    {
      termino: 'Optimización',
      significado:
        'Proceso de encontrar la mejor solución posible dentro de un conjunto de restricciones.',
    },
    {
      termino: 'PL (Programación Lineal)',
      significado:
        'Técnica matemática que optimiza recursos y procesos en la toma de decisiones empresariales.',
    },
    {
      termino: 'Región Factible',
      significado:
        'Conjunto de soluciones posibles que cumplen todas las restricciones de un problema de PL.',
    },
    {
      termino: 'Restricciones',
      significado:
        'Limitaciones o condiciones que deben cumplirse en un problema de PL, como presupuesto o capacidad de producción.',
    },
    {
      termino: 'Solver',
      significado:
        'Complemento de Excel que resuelve ecuaciones de optimización en modelos de PL.',
    },
    {
      termino: 'Variables de Decisión',
      significado:
        'Valores controlables dentro de un modelo de PL que afectan la función objetivo.',
    },
  ],
}
