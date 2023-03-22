import React from 'react';

export type WithChildrenProps<T = {}> = {
  children?: React.ReactNode;
} & T;

export type GetUrl = (pathname?: string) => URL;
