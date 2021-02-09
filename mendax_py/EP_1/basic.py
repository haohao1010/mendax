#######################################
# CONSTANTS
#######################################

DIGITS = '0123456789'

#######################################
# ERRORS
#######################################


class Error:
    def __init__(self, pos_start, pos_end, error_name, details):
        self.pos_start = pos_start
        self.pos_end = pos_end
        self.error_name = error_name
        self.details = details

    # 简化终端窗口的输出
    def as_string(self):
        result = f'{self.error_name}: {self.details}\n'
        result += f'File {self.pos_start.fn}, line {self.pos_start.ln + 1}'
        return result


# 继承自 Error 类
class IllegalCharError(Error):
    def __init__(self, pos_start, pos_end, details):
        super().__init__(pos_start, pos_end, 'Illegal Character', details)

#######################################
# POSITION
#######################################


class Position:
    def __init__(self, idx, ln, col, fn, ftxt):
        self.idx = idx  # 索引
        self.ln = ln  # 行
        self.col = col  # 列
        self.fn = fn  # 文件名称
        self.ftxt = ftxt

    def advance(self, current_char):
        self.idx += 1  # 增加索引
        self.col += 1  # 增加列号

        if current_char == '\n':
            self.ln += 1  # 增加行号
            self.col = 0  # 列号归零

        return self

    # 避免 python 引用性调用带来的问题（位置等）
    def copy(self):
        return Position(self.idx, self.ln, self.col, self.fn, self.ftxt)

#######################################
# TOKENS
#######################################


TT_INT = 'INT'  # int
TT_FLOAT = 'FLOAT'  # float
TT_PLUS = 'PLUS'  # +
TT_MINUS = 'MINUS'  # -
TT_MUL = 'MUL'  # *
TT_DIV = 'DIV'  # /
TT_LPAREN = 'LPAREN'  # (
TT_RPAREN = 'RPAREN'  # )


class Token:
    def __init__(self, type_, value=None):
        # 可选参数 value
        self.type = type_
        self.value = value

    # 简化终端窗口的输出
    def __repr__(self):
        # self: 对象自身
        if self.value:
            return f'{self.type}:{self.value}'
        return f'{self.type}'

#######################################
# LEXER
#######################################


class Lexer:
    def __init__(self, fn, text):
        self.fn = fn
        self.text = text
        self.pos = Position(-1, 0, -1, fn, text)
        self.current_char = None
        self.advance()

    # 向前读取
    def advance(self):
        self.pos.advance(self.current_char)
        self.current_char = self.text[self.pos.idx] if self.pos.idx < len(
            self.text) else None

    # 解析 token
    def make_tokens(self):
        tokens = []

        while self.current_char != None:
            # 忽略空格和制表符
            if self.current_char in ' \t':
                self.advance()
            elif self.current_char in DIGITS:
                tokens.append(self.make_number())
            elif self.current_char == '+':
                # 向列表 tokens 追加一个 TT_PLUS 对象
                tokens.append(Token(TT_PLUS))
                self.advance()
            elif self.current_char == '-':
                tokens.append(Token(TT_MINUS))
                self.advance()
            elif self.current_char == '*':
                tokens.append(Token(TT_MUL))
                self.advance()
            elif self.current_char == '/':
                tokens.append(Token(TT_DIV))
                self.advance()
            elif self.current_char == '(':
                tokens.append(Token(TT_LPAREN))
                self.advance()
            elif self.current_char == ')':
                tokens.append(Token(TT_RPAREN))
                self.advance()
            else:
                # 报告错误信息
                pos_start = self.pos.copy()
                char = self.current_char
                self.advance()
                return [], IllegalCharError(pos_start, self.pos, "'" + char + "'")

        return tokens, None

    def make_number(self):
        num_str = ''  # 跟踪数字
        dot_count = 0  # 跟踪小数点

        while self.current_char != None and self.current_char in DIGITS + '.':
            # 域：自然数 + 小数点
            if self.current_char == '.':
                if dot_count == 1:
                    # 不能有两个小数点
                    break
                dot_count += 1
                num_str += '.'
            else:
                num_str += self.current_char
            self.advance()

        # 整数类型 ｜ 浮点数类型
        if dot_count == 0:
            return Token(TT_INT, int(num_str))
        else:
            return Token(TT_FLOAT, float(num_str))

#######################################
# RUN
#######################################


def run(fn, text):
    lexer = Lexer(fn, text)
    tokens, error = lexer.make_tokens()

    return tokens, error
