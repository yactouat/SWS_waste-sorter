FROM fastai/fastai:2021-02-11

RUN pip install --upgrade pip

WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt

ENV FLASK_APP=app.py
# watch app' files
ENV FLASK_DEBUG=True

EXPOSE 5000

CMD ["bash", "-c", "python -m flask run --host=0.0.0.0"]