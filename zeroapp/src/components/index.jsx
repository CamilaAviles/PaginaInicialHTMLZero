import React from "react"

function index() {
    return (
        <div>
            <main>
                <div className="alumno">
                    <img src="path/to/fotodeperfil.jpg"/>
                    <img src="https://content.nationalgeographic.com.es/medio/2022/12/12/perro-1_514aad3b_221212161023_1280x720.jpg" alt="Foto de perfil" />
                </div>
                <div className="informacion">
                    <h3>Camila Aviles Vargas</h3>
                    <p>Número de Control: UTM22030751</p>
                    <p>Email: utm22030751@utma.edu.mx</p>
                    <p>Carrera: Tecnologías de la Información Área Desarrollo de Software</p>
                    <p>Cuatrimestre: 6</p>
                    <p>Materias:</p>
                    <ul>
                        <li>Bases de Datos para Computo en la nube</li>
                        <li>Expresión Oral y Escrita II</li>
                        <li>Desarrollo Móvil Multiplataforma</li>
                        <li>Tutoría</li>
                        <li>Aplicaciones Web para I 4.0</li>
                        <li>Idiomas</li>
                        <li>Aplicaciones de IoT</li>
                        <li>Integradora II</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
export default index;