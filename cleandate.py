import os
from PIL import Image

# 原始图片文件夹
input_folder = 'timeline-img'
# 输出图片文件夹
output_folder = 'timeline-img-jpg'

# 创建输出文件夹（如果不存在）
os.makedirs(output_folder, exist_ok=True)

# 遍历输入文件夹下的所有文件
for filename in os.listdir(input_folder):
    input_path = os.path.join(input_folder, filename)
    # 忽略非文件
    if not os.path.isfile(input_path):
        continue

    # 尝试打开图像
    try:
        with Image.open(input_path) as img:
            # 获取不带扩展名的文件名
            base_name = os.path.splitext(filename)[0]
            output_path = os.path.join(output_folder, base_name + '.jpg')
            # 转换为RGB模式并保存为JPG
            rgb_img = img.convert('RGB')
            rgb_img.save(output_path, 'JPEG')
            print(f"已转换：{filename} -> {base_name}.jpg")
    except Exception as e:
        print(f"跳过无法处理的文件：{filename}, 原因：{e}")

print("所有图片已转换完成。")
