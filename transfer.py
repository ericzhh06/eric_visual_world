import pandas as pd
import json
import os

# 输入输出路径
input_excel = 'photo-order.xlsx'
output_json = 'photo-order.json'

# 判断文件是否存在
if not os.path.exists(input_excel):
    print(f"未找到文件: {input_excel}")
else:
    try:
        # 读取 Excel
        df = pd.read_excel(input_excel)

        # 转为字典再转为 JSON 字符串（使用utf-8）
        json_data = df.to_dict(orient='records')

        # 写入 JSON 文件
        with open(output_json, 'w', encoding='utf-8') as f:
            json.dump(json_data, f, ensure_ascii=False, indent=4)

        print(f"已成功转换为 JSON：{output_json}")

    except Exception as e:
        print(f"转换失败：{e}")
