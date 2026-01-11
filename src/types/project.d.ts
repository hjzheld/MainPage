export interface Projects {
    id: number;
    title: string;
    content: string;
    mainTab: 'front' | 'back';
    subTab: 'vue' | 'react' | 'fastapi' | 'django';
    tags: string[];
    detail: Detail;
}

export interface Detail {
    github?: string;
    notion?: string;
    notion_vedio?: string;
    video?: string;
    site?: string;
    blog?: string[];
    content: string;
    image: MediaItem[];
    stack: Stack;
}

export interface Stack {
    back?: string[];
    front?: string[];
    database?: string[];
    ai?: string[];
    build?: string[];
}

type MediaItem = {
    type: 'image' | 'video';
    src: string;
};

  
interface ImageProps {
    images: MediaItem[];
    onClick?: () => void;
};
