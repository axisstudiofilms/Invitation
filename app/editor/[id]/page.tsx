import {privateMetadata} from '@/lib/seo';
export const metadata=privateMetadata;
import { Editor } from '@/components/axis-app'; export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;return <Editor id={id}/>;}
