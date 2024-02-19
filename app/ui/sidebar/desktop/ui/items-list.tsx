'use client';

import { useState } from 'react';

import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Chip,
} from '@material-tailwind/react';

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';

import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const ItemsList = () => {
  const [open, setOpen] = useState(0);

  const handleClick = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <List>
      <Accordion
        open={open === 1}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${
              open && 'rotate-180'
            }`}
          />
        }
      >
        <ListItem>
          <AccordionHeader
            className="border-b-0 p-0.5"
            onClick={() => handleClick(1)}
          >
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              Склады
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0 max-h-[28rem] overflow-y-auto">
            <ListItem>Великие Луки</ListItem>
            <ListItem>Псков</ListItem>
            <ListItem>Санкт-Петербург</ListItem>
            <ListItem>Москва</ListItem>
            <ListItem>Великий Новгород</ListItem>
            <ListItem>Смоленск</ListItem>
            <ListItem>Брянск</ListItem>
            <ListItem>Тверь</ListItem>
          </List>
        </AccordionBody>
      </Accordion>
      <hr className="my-2 border-blue-gray-50" />
      <ListItem>
        <ListItemPrefix>
          <InboxIcon className="h-5 w-5" />
        </ListItemPrefix>
        Сообщения
        <ListItemSuffix>
          <Chip
            value="14"
            size="sm"
            variant="ghost"
            color="blue-gray"
            className="rounded-full"
          />
        </ListItemSuffix>
      </ListItem>
      <ListItem>
        <ListItemPrefix>
          <UserCircleIcon className="h-5 w-5" />
        </ListItemPrefix>
        Профиль
      </ListItem>
      <ListItem>
        <ListItemPrefix>
          <Cog6ToothIcon className="h-5 w-5" />
        </ListItemPrefix>
        Настройки
      </ListItem>
      <ListItem>
        <ListItemPrefix>
          <PowerIcon className="h-5 w-5" />
        </ListItemPrefix>
        Выйти
      </ListItem>
    </List>
  );
};

export default ItemsList;
