import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
} from "@nextui-org/react";

const Homepage = () => {
  const data = [
    {
      hora: "08:00 AM a 09:00 AM",
      materias: [
        {
          nombre: "Mecánica Automotriz",
          jefeCarrera: "Jane Doe",
          horario: "08:00 A.M. a 09:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        },
        {
          nombre: "Chef Internacional",
          jefeCarrera: "John Smith",
          horario: "08:00 A.M. a 09:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=b04258114e29026702d",
        },
        {
          nombre: "Programación Web",
          jefeCarrera: "Alice Johnson",
          horario: "08:00 A.M. a 09:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=c04258114e29026702d",
        },
        {
          nombre: "Diseño Gráfico",
          jefeCarrera: "David Brown",
          horario: "08:00 A.M. a 09:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=d04258114e29026702d",
        },
        {
          nombre: "Historia del Arte",
          jefeCarrera: "Eva Martinez",
          horario: "08:00 A.M. a 09:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=e04258114e29026702d",
        },
        {
          nombre: "Física Cuántica",
          jefeCarrera: "Frank Johnson",
          horario: "08:00 A.M. a 09:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=f04258114e29026702d",
        },
        {
          nombre: "Biología Molecular",
          jefeCarrera: "Grace Lee",
          horario: "08:00 A.M. a 09:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=g04258114e29026702d",
        },
      ],
    },
    {
      hora: "10:00 AM a 11:00 AM",
      materias: [
        {
          nombre: "Inglés Avanzado",
          jefeCarrera: "Hank Smith",
          horario: "10:00 A.M. a 11:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=h04258114e29026702d",
        },
        {
          nombre: "Química Orgánica",
          jefeCarrera: "Isabel Rodriguez",
          horario: "10:00 A.M. a 11:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=i04258114e29026702d",
        },
        {
          nombre: "Cálculo Avanzado",
          jefeCarrera: "James Brown",
          horario: "10:00 A.M. a 11:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=j04258114e29026702d",
        },
        {
          nombre: "Ciencias Políticas",
          jefeCarrera: "Karen White",
          horario: "10:00 A.M. a 11:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=k04258114e29026702d",
        },
        {
          nombre: "Economía Internacional",
          jefeCarrera: "Liam Davis",
          horario: "10:00 A.M. a 11:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=l04258114e29026702d",
        },
        {
          nombre: "Psicología del Comportamiento",
          jefeCarrera: "Mia Johnson",
          horario: "10:00 A.M. a 11:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=m04258114e29026702d",
        },
        {
          nombre: "Geología Planetaria",
          jefeCarrera: "Nathan Miller",
          horario: "10:00 A.M. a 11:00 A.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=n04258114e29026702d",
        },
      ],
    },
    {
      hora: "02:00 PM a 03:00 PM",
      materias: [
        {
          nombre: "Dibujo Artístico",
          jefeCarrera: "Olivia Johnson",
          horario: "02:00 P.M. a 03:00 P.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=o04258114e29026702d",
        },
        {
          nombre: "Introducción a la Filosofía",
          jefeCarrera: "Peter Smith",
          horario: "02:00 P.M. a 03:00 P.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=p04258114e29026702d",
        },
        {
          nombre: "Literatura Clásica",
          jefeCarrera: "Quincy Brown",
          horario: "02:00 P.M. a 03:00 P.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=q04258114e29026702d",
        },
        {
          nombre: "Sociología Contemporánea",
          jefeCarrera: "Rachel White",
          horario: "02:00 P.M. a 03:00 P.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=r04258114e29026702d",
        },
        {
          nombre: "Anatomía Humana",
          jefeCarrera: "Sam Davis",
          horario: "02:00 P.M. a 03:00 P.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=s04258114e29026702d",
        },
        {
          nombre: "Arqueología Maya",
          jefeCarrera: "Tina Johnson",
          horario: "02:00 P.M. a 03:00 P.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=t04258114e29026702d",
        },
        {
          nombre: "Botánica Avanzada",
          jefeCarrera: "Ulysses Brown",
          horario: "02:00 P.M. a 03:00 P.M.",
          avatarSrc: "https://i.pravatar.cc/150?u=u04258114e29026702d",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 className="my-6 text-3xl text-center font-extrabold  md:text-5xl lg:text-3xl dark:text-white">
        Agenda de cursos por horarios
      </h2>
      <div className="w-11/12 mx-auto">
        <Table isStriped>
          <TableHeader>
            <TableColumn className="font-bold text-lg">Hora</TableColumn>
            <TableColumn className="font-bold text-lg">Domingo</TableColumn>
            <TableColumn className="font-bold text-lg">Lunes</TableColumn>
            <TableColumn className="font-bold text-lg">Martes</TableColumn>
            <TableColumn className="font-bold text-lg">Miércoles</TableColumn>
            <TableColumn className="font-bold text-lg">Jueves</TableColumn>
            <TableColumn className="font-bold text-lg">Viernes</TableColumn>
            <TableColumn className="font-bold text-lg">Sábado</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="w-full">
                <TableCell>{row.hora}</TableCell>
                {row.materias.map((materia, materiaIndex) => (
                  <TableCell key={materiaIndex}>
                    <Popover>
                      <PopoverTrigger>
                        <div className="break-words cursor-pointer h-full p-2 rounded-lg hover:bg-neutral-300">
                          {materia.nombre}
                        </div>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">{materia.nombre}</div>
                          <User
                            name={materia.jefeCarrera}
                            description="Jefe de carrera"
                            avatarProps={{
                              src: materia.avatarSrc,
                            }}
                          />
                          <div className="text-tiny">Horario: {materia.horario}</div>
                          <div>Clase: #21</div>
                          <div>
                            En este curso se aprenderá sobre X y sobre Y cosas, donde también veremos Z cosas de la
                            manera más fácil y práctica
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Homepage;
