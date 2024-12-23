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
    article: {
        _type: string;          // e.g., 'block'
        children: {
          _type: string;        // e.g., 'span' for text
          text: string;         // The actual text content
          marks: string[];      // Marks like bold, italic, etc.
        }[];
        style?: string;         // Optional, e.g., 'normal', 'h1', etc.
      }[];
    }
