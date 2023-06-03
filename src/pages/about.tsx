import Image from "next/image";
import { MainLayout } from "../../components/layout/MainLayout";

import Link from "next/link";
import { DarkLayout } from "../../components/layout/DarkLayout";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function AboutPage() {
  return (
      <>
        <h1>About Page</h1>
          <div className={'description'}>
            <p>
              Get started by editing&nbsp;
              <code className={'code'}>src/pages/about</code>
            </p>
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{' '}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={'vercelLogo'}
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>

          <div className={'center'}>
            <Image
              className={'logo'}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>

          <div className={'grid'}>
          <Link href='/'><h2> <b>Ir al Home </b></h2></Link>
          </div>
      </>
  )
}

AboutPage.getLayout = function getLayout ( page: JSX.Element ){
  return (
      <MainLayout>
        <DarkLayout>
          { page }
        </DarkLayout>
      </MainLayout>
  );
};