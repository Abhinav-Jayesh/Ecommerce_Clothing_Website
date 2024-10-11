from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    quantity = models.IntegerField()

    class Meta:
        db_table = 'product'

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product,related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

    class Meta:
        db_table = 'product_image'

    def __str__(self):
        return self.product.name