'use client';

import { useState } from 'react';

import {branches} from '@/app/mockdata/branches';
import useRoutes from '@/app/hooks/use-routes';

import SidebarItem from './item';

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

import { PresentationChartBarIcon } from '@heroicons/react/24/solid';

import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import BranchItem from './branch-item';

const AccordionUi = () => {
  const routes = useRoutes();

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
            {branches.map((item) => (
              <BranchItem 
                key={item.id}
                id={item.id}
                href={item.href}
                label={item.label}
              />
            ))}
          </List>
        </AccordionBody>
      </Accordion>
      <hr className="my-2 border-blue-gray-50" />
      {routes.map((item) => (
        <SidebarItem
          key={item.label}
          label={item.label}
          href={item.href}
          iconPreffix={item.iconPreffix}
        />
      ))}
    </List>
  );
};

export default AccordionUi;
