FROM python:3.8.17-slim

RUN pip install --upgrade pip setuptools wheel
RUN pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu

WORKDIR /app
COPY ./api /app
RUN pip install --no-cache-dir -r requirements.txt

ENV FLASK_APP=app.py
# watch app' files
ENV FLASK_DEBUG=True

EXPOSE 5000

CMD ["bash", "-c", "python -m flask run --host=0.0.0.0"]