/* eslint-disable react-refresh/only-export-components */
import React from 'react';

import 'normalize.css';
import '@/styles/index.scss';

import { CommitPage } from '@/app/components/devtools/commit';
import { LagRadar } from '@/app/components/devtools/lag-radar/dev';
import { Footer } from '@/app/components/main-layout/footer';
import { Header } from '@/app/components/main-layout/header';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { TooltipProvider } from '@/app/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { GeometosFont, interFont, kanitFont, MonaspaceNeonFont, russoOneFont, UbuntuFont } from '@/styles/font';
import { TRPCReactProvider } from '@/trpc/react';

export const metadata = {
  title: '张文涛-联络站',
  description: "你在找张文涛吗？没错你来对了，这里正是他的个人联络站，在这里去探索那未知的海洋吧！",
  icons: [{ rel: 'icon', url: 'https://bucket.zhang-wen-tao.com/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <CommitPage />
      </head>
      <body
        className={cn(
          'futi-ui',
          interFont.variable,
          GeometosFont.variable,
          russoOneFont.variable,
          kanitFont.variable,
          UbuntuFont.variable,
          MonaspaceNeonFont.variable,
        )}
      >
        <TooltipProvider delayDuration={100}>
          <ScrollArea className="relative h-dvh w-dvw min-w-max [&>[data-radix-scroll-area-viewport]>div]:!flex [&>[data-radix-scroll-area-viewport]>div]:h-full [&>[data-radix-scroll-area-viewport]>div]:flex-col">
            <Header />
            <main className="flex flex-1 flex-col">
              <TRPCReactProvider>{children}</TRPCReactProvider>
            </main>
            <Footer />
          </ScrollArea>
          <LagRadar />
        </TooltipProvider>
      </body>
    </html>
  );
}