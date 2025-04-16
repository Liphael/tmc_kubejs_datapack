# README

## recipe

基本框架：

```java
ServerEvents.recipes(<object_name> =>{
    <object_name>.<method>(<parameters>)
})
```

### 基本修改架构定义

以下是一个配方修改的基本框架:

```java
ServerEvents.recipes(<object_name> =>{
    <object_name>.<method>(<parameters>)
})
```

其中`<object_name>`为定义的任意变量名，通常用法为`event`或者简写为`e`。

#### 调整

#### 重构

重构改动以`RC`开头，外加2位主版本号，6位改动号；以`#`号分割。

##### 删除

```java
ServerEvents.recipes(event =>{
    event.remove([
        {id:'<recipe_id>'},
        {input:['<item_id>', '<item_tag>']},
        {output:['<item_id>', '<item_tag>']},
        {mod:'<mod_id>'},
        {type:'<recipe_type>'}
        ])
    event.remove({
        id:'<recipe_id>',
        input:['<item_id>', '<object_tag>']
        output:'<item_id>',
        }
        )
    event.<method>(<parameters>)
})
```

配方的删除，是通过：**remove方法的一个唯一参数**，来进行匹配的。

##### 新增