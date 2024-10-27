import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';

import Students from '@/components/Students';
import Head from 'next/head';

const Group = () => {
      return (
        <>
       <Head> <title>Group</title></Head>
      <Students />
      </>
      );
    };
    
   
    


export default Group;