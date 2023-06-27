from rest_framework import serializers
from .models import Question

class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ('pk', 'title', 'body', 'created_at', 'updated_at')
