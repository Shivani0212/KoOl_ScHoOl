import React from 'react';
import { AiOutlineCalendar, AiOutlineUserAdd } from 'react-icons/ai';
import { BsKanban } from 'react-icons/bs';
import { BiHelpCircle, BiSolidSpreadsheet } from 'react-icons/bi';
import { PiStudentFill } from 'react-icons/pi';
import { SiBytedance } from 'react-icons/si';
import { MdSimCardAlert, MdSportsHandball } from 'react-icons/md';
import { GiGamepadCross, GiTeacher } from 'react-icons/gi';


export const links = [
  {
    title: 'Academics',
    links: [
      {
        name: 'Students',
        icon: <PiStudentFill/>,
      },
      {
        name: 'Teachers',
        icon: <GiTeacher />,
      },
      {
        name: 'Attendance',
        icon: <BiSolidSpreadsheet />,
      },
      {
        name: 'Notice',
        icon: <MdSimCardAlert />,
      },
    ],
  },

  {
    title: 'Activity',
    links: [
      {
        name: 'Sports',
        icon: <MdSportsHandball />,
      },
      {
        name: 'Cultural Fest',
        icon: <SiBytedance />,
      },
      {
        name: 'Technical Fest',
        icon: <GiGamepadCross />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'Assignment',
        icon: <BsKanban />,
      },
    ],
  },
  {
    title: 'Settings',
    links: [
      {
        name: 'Support',
        icon: <BiHelpCircle />,
      },
      {
        name: 'Invite',
        icon: <AiOutlineUserAdd />,
      },
    ],
  },
];