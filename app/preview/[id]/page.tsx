import {privateMetadata} from '@/lib/seo';
export const metadata=privateMetadata;
import { Preview } from '@/components/axis-app'; export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;return <Preview id={id}/>;}
