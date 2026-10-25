export type Project = { title: string; area: 'Comunicación' | 'Producción' | 'Tecnología'; type: 'Experiencia profesional' | 'Proyecto propio' | 'Trabajo realizado'; description: string };
export const projects: Project[] = [
{title:'Full Medios / Full Fest',area:'Producción',type:'Trabajo realizado',description:'Coordinación de equipos, programación y producción de una jornada de transmisión y actividades.'},
{title:'Strong Fitness Gym',area:'Comunicación',type:'Trabajo realizado',description:'Análisis de mercado, posicionamiento y comunicación de lanzamiento.'},
{title:'Milpos',area:'Comunicación',type:'Trabajo realizado',description:'Comunicación, planificación territorial y vinculación con instituciones educativas.'},
{title:'Brush Fest',area:'Producción',type:'Proyecto propio',description:'Diseño, coordinación y operación de un festival cultural.'},
{title:'Tamms',area:'Producción',type:'Proyecto propio',description:'Gestión de un espacio gastronómico y cultural con programación de actividades.'},
{title:'ISCX',area:'Tecnología',type:'Experiencia profesional',description:'Desarrollo backend, APIs, integraciones y procesos sobre infraestructura cloud.'},
{title:'BuildVision',area:'Tecnología',type:'Experiencia profesional',description:'Desarrollo full stack de aplicaciones.'},
{title:'Social Wave',area:'Tecnología',type:'Experiencia profesional',description:'Desarrollo frontend e interfaces web.'},
{title:'E-commerce App',area:'Tecnología',type:'Proyecto propio',description:'Aplicación demostrativa de comercio electrónico.'},
{title:'Travel App',area:'Tecnología',type:'Proyecto propio',description:'Aplicación demostrativa de viajes.'},
{title:'FlowOps',area:'Tecnología',type:'Proyecto propio',description:'Producto de gestión de órdenes de trabajo en desarrollo.'},
];
