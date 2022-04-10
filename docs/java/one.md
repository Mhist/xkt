# 学习 java 基础

[韩顺平](https://www.bilibili.com/video/BV1fh411y7R8?p=42)
[哔哩哔哩---韩顺平 零基础 java 学习](https://www.bilibili.com/video/BV1fh411y7R8?p=161&spm_id_from=pageDriver)

## 转义字符

| Tables |       Are        |
| ------ | :--------------: |
| \t     | 制表位，实现对齐 |
| \n     |      换行符      |
| \\\    |        \         |
| \n'    |        '         |
| \r'    |       回车       |

### 练习

:100: :tada:

```

// 公有的类名与文件名要相同
public class javaHello {
    public static void main(String[] args) {
        System.out.println("书名\t作者\t价格\t销量\t\n三国\t罗贯中\t120\t1000\t");

    }
}
```

<img src="/public/foo.png" alt="foo" />

## 关于 vitepress 引用图片的问题

::: danger

- 需要在 docs 文件内部
- 可以设置相对路径
- $withbase 使用时可以配置 config.js 下的 base 属性，引用时需要：src 动态引用
  :::

## javac 编译时可以指定编码

```
javac -encoding UTF-8 javaHello.java
```

## 初学者的常见错误

- 找不到文件
  解决：源文件名不存在或者写错、或者当前路径错误
- 主类名与文件名不一致
  解决：声明为 public 的主类应该与文件名一致，否则编译失败
- 缺少分号
  解决：编译失败，注意错误出现的行数，再到源代码中指定位置改错
- 中英文输入错误
  解决：切换输入
- 拼写错误 错误：细心问题

## 注释

- 单行注释 //
- 多行注释 /\*\*/ 多行注释不允许嵌套
- 文档注释 ：注释内容可以被 jdk 提供的工具 javadoc 所解析，生成一套以网页文件形式体现的该程序的说明文档，一写在类

```
javadoc -d 文件夹名 --xx -yy Demo3.java
```

<img src="/public/javadoc.png" alt="javadoc" />
<img src="/public/D-temp-javaHello-html-2022-04-02-19_16_05.png" alt="javadoc" />

# 第二章

## 变量

::: warning

- 变量必须先声明后使用
- 同一个作用域的数据/值可以在同一；类型范围内不断变化
- 变量在同一个作用域内不能重名
  :::

## 加号

::: tip

- 加号左右两侧都是数字时，进行加运算
- 加好两侧中有一侧是字符串则，加号做拼接操作
  :::

## 数据类型

<img src="/public/data-type.png" alt="数据类型" />
<img src="/public/int-type.png" alt="整型数据类型" />

### 整型

Java 的整型常量(具体值)默认为 int 型，声明 long 型常量需后加‘l’或‘L’

## 数组

数组可以存放同一类型的数据，数组也是一种数据类型，被称为引用类型。
