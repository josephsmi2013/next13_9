import { createClient } from 'next-sanity';

const sanity = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2021-03-25',
	useCdn: true,
});
export default sanity;
