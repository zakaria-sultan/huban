import zipfile
import re
import sys

def get_docx_text(path):
    try:
        document = zipfile.ZipFile(path)
        xml_content = document.read('word/document.xml').decode('utf-8')
        document.close()
        
        # Determine paragraphs
        paragraphs = re.findall(r'<w:p.*?>(.*?)</w:p>', xml_content)
        text_content = []
        for p in paragraphs:
            texts = re.findall(r'<w:t.*?>(.*?)</w:t>', p)
            line = "".join(texts).strip()
            if line:
                text_content.append(line)
        
        return "\n".join(text_content)
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python parse_docx.py <path_to_docx>")
    else:
        print(get_docx_text(sys.argv[1]))
