FROM fastai/fastai@sha256:4f695f65038f8986ea79549462a38f6dcd3854ad0d0584b69ed521b076342574

RUN pip install --upgrade pip

WORKDIR /app
COPY ./api /app
RUN pip install setuptools
RUN pip install --ignore-installed blinker --no-cache-dir -r requirements.txt

ENV FLASK_APP=app.py
# watch app' files
ENV FLASK_DEBUG=True

EXPOSE 5000

CMD ["bash", "-c", "python -m flask run --host=0.0.0.0"]