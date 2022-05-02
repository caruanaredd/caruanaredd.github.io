export interface Page
{
    icon?: any;

    name: string;

    url: string;

    target: 'external' | 'internal'
}

export interface Navigatable
{
    title: string;

    slug: string;

    date: { year: number, month: number, day: number };

    updated: { year: number, month: number, day: number} | null;
}

export interface Tutorial extends Navigatable
{
    category: string[];

    content: string;
    
    synopsis: string;

    references: string[];
}

export interface Lecture extends Navigatable
{
    synopsis: string;

    slides: Slide[];

    references: string[];
}

export interface Slide
{
    content: string;

    notes?: string;
}