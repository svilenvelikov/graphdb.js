const RdfAsXmlParser = require('./parser-mocks').RdfAsXmlParser;
const ParserWithNoParseMethod = require('./parser-mocks').ParserWithNoParseMethod;
const ParserWithNoGetSupportedTypeMethod = require('./parser-mocks').ParserWithNoGetSupportedTypeMethod;

describe('ContentParser', () => {
  test('should throw error if parser does not implement ContentParser#getSupportedType', () => {
    const parser = new ParserWithNoGetSupportedTypeMethod();
    expect(() => {
      parser.getSupportedType();
    }).toThrow(Error('Method #getSupportedType() must be implemented!'));
  });

  test('should throw error if parser does not implement ContentParser#parse', () => {
    const parser = new ParserWithNoParseMethod();
    expect(() => {
      parser.parse('content');
    }).toThrow(Error('Method #parse(content) must be implemented!'));
  });

  test('should initialize #isDefault to false by default if not provided', () => {
    const parser = new RdfAsXmlParser();
    expect(parser.isDefault()).toBeFalsy();
  });

  test('should initialize #isDefault to provided value', () => {
    let parser = new RdfAsXmlParser(false);
    expect(parser.isDefault()).toBeFalsy();

    parser = new RdfAsXmlParser(true);
    expect(parser.isDefault()).toBeTruthy();
  });

  test('should instantiate a valid implementation properly', () => {
    const parser = new RdfAsXmlParser();
    expect(parser).toBeDefined();
  });
});
