export interface blogpost{
    title: 'string',
    currentSlug: 'string',
    description: 'string',   
    imageUrl: string,
}

export interface blogallpost{
    title: 'string',
    currentSlug: 'string',  
    imageUrl: string,
    article: { type: string; content: string }[];
}