export class Lexer
{
    private m_Source: string = '';
    private m_Output: string = '';

    private m_Pointer: number = 0;
    private m_Start: number = 0;

    /**
     * Produces a code tag.
     * @param params The code parameters.
     * @returns A code tag.
     */
    private code(params: string[])
    {
        if (params.length == 0) return;
        
        var tag = `<pre>` +
                        `<code class="hljs language-{1}">{0}</code>` +
                    `</pre>`;
        
        return tag.replace(/\{1\}/g, params[1]).replace(/\{[0]\}/g, params[0].trim());
    }

    /**
     * Produces a column.
     * @param params The column parameters.
     * @returns A column element.
     */
    private column(params: string[])
    {
        if (params.length == 0) return;
        
        var tag = `<div class="{1}">{0}</div>`;
        return tag.replace(/\{1\}/g, params[1]).replace(/\{[0]\}/g, params[0].trim());
    }

    /**
     * Parses a command.
     */
    private command(): void
    {
        while (this.peek() != '{' && !this.isAtEnd())
            this.next();

        const command = this.m_Source.substr(this.m_Start + 1, this.m_Pointer - this.m_Start - 1);
        
        switch (command)
        {
            case 'em':
                this.m_Output += this.tag(this.getParams(), 'em');
                break;
            
            case 'code':
                this.m_Output += this.code(this.getParams());
                break;
            
            case 'col':
                this.m_Output += this.column(this.getParams());
                break;

            case 'header':
                this.m_Output += this.tag(this.getParams(), 'h2');
                break;

            case 'grid':
                this.m_Output += this.grid(this.getParams());
                break;

            case 'image':
                this.m_Output += this.image(this.getParams());
                break;

            case 'item':
                this.m_Output += this.tag(this.getParams(), 'li');
                break;
            
            case 'link':
                this.m_Output += this.link(this.getParams());
                break;

            case 'olist':
                this.m_Output += this.tag(this.getParams(), 'ol');
                break;

            case 'par':
                this.m_Output += this.tag(this.getParams(), 'p');
                break;

            case 'strong':
                this.m_Output += this.tag(this.getParams(), 'strong');
                break;
                
            case 'subheader':
                this.m_Output += this.tag(this.getParams(), 'h3');
                break;

            case 'subsubheader':
                this.m_Output += this.tag(this.getParams(), 'h4');
                break;

            case 'ulist':
                this.m_Output += this.tag(this.getParams(), 'ul');
                break;
        }
    }

    /**
     * Parses a command's parameters.
     * @returns The parameters of a command.
     */
    private getParams(): string[]
    {
        const lexer = new Lexer();
        const params: string[] = [];
        
        while (this.match('{') && !this.isAtEnd())
        {
            this.m_Start = this.m_Pointer;
            var depth: number = 1;

            while (depth > 0 && !this.isAtEnd())
            {
                const c = this.next();
                if (c == '\\' && (this.match('{') || this.match('}'))) continue;
                if (c == '{') depth++;
                if (c == '}') depth--;
            }
            this.m_Pointer--;
            
            const param = this.m_Source.substr(this.m_Start, this.m_Pointer - this.m_Start);
            params.push(lexer.parse(param));
            this.next();
        }
        return params;
    }

    /**
     * Produces a grid layout.
     * @param params The grid content.
     * @returns A container.
     */
    private grid(params: string[])
    {
        if (params.length == 0) return;

        var tag = `<div class="container-fluid p-0">` +
                        `<div class="row">{0}</div>` +
                    `</div>`;
        
        return tag.replace(/\{0\}/g, params[0]);
    }

    /**
     * Produces an image tag.
     * @param params The image parameters.
     * @returns An image tag.
     */
    private image(params: string[])
    {
        if (params.length == 0) return;
        
        var tag = `<figure class="d-block w-100">` +
                            `<img src="{0}" alt="{1}" class="d-block {2}">` +
                            `<figcaption class="text-center text-muted mt-1">{1}</figcaption>` +
                        `</figure>`;
        
        return tag.replace(/\{2\}/g, params[2] || '').replace(/\{1\}/g, params[1]).replace(/\{0\}/g, params[0]);
    }

    /**
     * Checks if the lexer is at the end of the source.
     * @returns True if there is no more text to read.
     */
    private isAtEnd(): boolean
    { return this.m_Pointer >= this.m_Source.length; }
    

    /**
     * Produces a link tag.
     * @param params The link parameters.
     * @returns A link tag.
     */
    private link(params: string[])
    {
        if (params.length == 0) return;
        
        var tag = `<a href="{0}" class="{2}" target="_blank">{1}</a>`;
        return tag.replace(/\{2\}/g, params[2] || '').replace(/\{1\}/g, params[1] || params[0]).replace(/\{[0]\}/g, params[0]);
    }

    /**
     * Consumes the next character if it produces a match.
     * @param c The character to match.
     * @returns True if the next character is a match.
     */
    private match(c: string): boolean
    {
        if (this.isAtEnd()) return false;
        if (this.peek() != c) return false;
        this.next();
        return true;
    }
    
    /**
     * Returns the current character and moves the pointer.
     * @returns The current character.
     */
    private next(): string
    { return this.m_Source.charAt(this.m_Pointer++); }
    
    /**
     * Peeks at the current character.
     * @returns The current character.
     */
    private peek(): string
    { return this.m_Source.charAt(this.m_Pointer); }

    /**
     * Parses source text.
     * @param source The source text to parse.
     * @returns Text parsed as HTML.
     */
    parse(source: string): string
    {
        this.m_Source = source;
        this.m_Pointer = 0;
        this.m_Output = '';

        while (!this.isAtEnd())
        {
            this.m_Start = this.m_Pointer;
            const c = this.next();
            
            switch (c)
            {
                case '\\':
                    if (this.match('\\')) this.m_Output += '<br>';
                    else this.command();
                    break;

                default:
                    this.m_Output += c;
                    break;
            }

        }
        return this.m_Output;
    }

    /**
     * Produces a tag.
     * @param params The tag parameters.
     * @param type The tag type.
     * @returns The compiled tag.
     */
    private tag(params: string[], type: string)
    {
        if (params.length == 0) return;
        
        var tag = `<${type}>{0}</${type}>`;
        return tag.replace(/\{[0]\}/g, params[0]);
    }
}