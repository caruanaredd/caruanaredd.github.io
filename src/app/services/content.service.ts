import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService
{
  constructor() { }

  /**
   * Parses new lines and commands in a string.
   * @param content The content to parse.
   * @returns The formatted content.
   */
  parse(content: string): string
  {
    return content;
  }

  /**
   * Parses commands in content.
   * @param content The content to parse.
   * @param commands The commands to search.
   * @returns The parsed content.
   */
  private commands(content: string, commands: RegExpMatchArray | null): string
  {
    // If there are no commnads, return the content.
    if (commands === null) return content;

    // Loop through each command.
    for (let command of commands)
    {
      // The command type.
      const type: RegExpMatchArray | null = command.match(/\\([^\{]+)/g);
      
        // The parameters.
      const params: string[] = this.getParams(command);
      for (var i = 0; i < params.length; i++)
        params[i] = params[i].replace(/(\{|\})/g, '');

      // If there is no type, stop here.
      if (type === null || type.length == 0) continue;

      // parse according to type.
      switch (type[0])
      {
        case '\\em':
          content = this.parseEmphasis(content, command, params); break;

        case '\\header':
          content = this.parseHeader(content, command, params); break;

        case '\\subheader':
          content = this.parseHeader(content, command, params, 'h3'); break;

        case '\\subsubheader':
          content = this.parseHeader(content, command, params, 'h4'); break;
        
        case '\\image':
          content = this.parseImage(content, command, params); break;

        case '\\link':
          content = this.parseLink(content, command, params); break;

        case '\\strong':
          content = this.parseStrong(content, command, params); break;
      }
    }

    return content;
  }

  /**
   * Returns the parameters of a command.
   * @param command The command to parse.
   * @returns The parameters of a command.
   */
  private getParams(command: string): string[]
  {
    const params: RegExpMatchArray | null = command.match(/{([^}]+)}/g);
    if (params === null) return [];
    return params.map(p => p);
  }

  /**
   * Converts a command into a header.
   * @param content The post content.
   * @param command The command to search.
   * @param params The parameters.
   * @returns The filtered content.
   */
  private parseEmphasis(content: string, command: string, params: string[]): string
  {
    if (!params || params.length == 0) return content;
    
    var tag: string = '<em>{0}</em>';
    tag = tag.replace(/\{0\}/g, params[0]);

    return content.replace(command, tag);
  }

  /**
   * Converts a command into an image
   * @param content The post content.
   * @param command The command to search.
   * @param params The parameters.
   * @returns The filtered content.
   */
  private parseImage(content: string, command: string, params: string[]): string
  {
    if (!params || params.length == 0) return content;
    var tag: string = '<figure class="d-block">' +
                        '<img src="{0}" alt="{1}" class="d-block {2}">' +
                        '<figcaption class="mt-1 text-muted text-center">{1}</figcaption>' +
                      '</figure>';

    if (params.length >= 3) tag = tag.replace(/\{2\}/g, params[2]);
    if (params.length >= 2) tag = tag.replace(/\{1\}/g, params[1]);
    tag = tag.replace(/\{[1-9]\}/g, '');
    tag = tag.replace(/\{0\}/g, params[0]);

    return content.replace(command, tag);
  }

  /**
   * Converts a command into a header.
   * @param content The post content.
   * @param command The command to search.
   * @param params The parameters.
   * @returns The filtered content.
   */
  private parseHeader(content: string, command: string, params: string[], tag = 'h2'): string
  {
    if (!params || params.length == 0) return content;
    
    tag = `<${tag} class="${tag} fw-bold">{0}</${tag}>`;
    tag = tag.replace(/\{0\}/g, params[0]);

    return content.replace(command, tag);
  }

  /**
   * Converts a command into a link.
   * @param content The post content.
   * @param command The command to search.
   * @param params The parameters.
   * @returns The filtered content.
   */
  private parseLink(content: string, command: string, params: string[]): string
  {
    if (!params || params.length == 0) return content;
    var tag: string = '<a href="{0}" target="_blank">{1}</a>';
    
    if (params.length >= 2) tag = tag.replace(/(\{1\})/g, params[1]);
    tag = tag.replace(/(\{[0-9]\})/g, params[0]);

    return content.replace(command, tag);
  }

  /**
   * Converts a command into bold text.
   * @param content The post content.
   * @param command The command to search.
   * @param params The parameters.
   * @returns The filtered content.
   */
  private parseStrong(content: string, command: string, params: string[]): string
  {
    if (!params || params.length == 0) return content;
    
    var tag: string = '<strong>{0}</strong>';
    tag = tag.replace(/\{0\}/g, params[0]);

    return content.replace(command, tag);
  }
}
