# Generated by Django 3.1.7 on 2021-04-17 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hh_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='city',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='company',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='salary',
            field=models.FloatField(default=0.0),
        ),
    ]
